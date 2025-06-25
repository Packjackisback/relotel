import { fsOps } from '../files/fs-ops';
import * as Babel from '@babel/standalone';

// Place your window manager files under `default/WindowManagers`. Each should export `wmInfo`.

const rawModules = import.meta.glob('../../default/WindowManagers/*.tsx', { eager: true, as: 'raw' }) as Record<string, string>;
const modModules = import.meta.glob('../../default/WindowManagers/*.tsx', { eager: true }) as Record<string, any>;

interface WMManifest {
  id: string;
  name: string;
  icon?: string;
  entry: string;
}

function pathToId(path: string): string {
  return path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'unknown';
}

export async function bootstrapBuiltInWindowManagers() {
  const existing = new Set<string>(await fsOps.readdir('/system/window-manager'));
  for (const [path, tsxCode] of Object.entries(rawModules)) {
    const mod = modModules[path] as any;
    const info = mod.wmInfo ?? { id: pathToId(path), name: pathToId(path) };
    const id = info.id;
    const dir = `/system/window-manager/${id}`;
    if (!existing.has(id)) {
      await fsOps.mkdir(dir);
    }

    // Compile TSX to UMD JS using the same strategy as apps
    const { code: transpiled } = Babel.transform(tsxCode, {
      presets: [
        'typescript',
        ['react', { runtime: 'classic' }],
      ],
      plugins: [
        ['transform-modules-umd', { globals: { react: 'React', 'react95': 'React95' }, exactGlobals: true }],
      ],
      filename: `${id}.tsx`,
      sourceType: 'module',
    });

    const wrapped = `const React = window.React;\nconst React95 = window.React95;\nconst DndKitCore = window.DndKitCore;\nconst DndKitSortable = window.DndKitSortable;\nconst DndKitUtilities = window.DndKitUtilities;\nconst require = (m) => {\n  if (m === 'react' || m === 'react/jsx-runtime' || m === 'react/jsx-dev-runtime') return React;\n  if (m === 'react95') return React95;\n  if (m === '@dnd-kit/core') return DndKitCore;\n  if (m === '@dnd-kit/sortable') return DndKitSortable;\n  if (m === '@dnd-kit/utilities') return DndKitUtilities;\n  if (m.includes('appRegistry')) return { appRegistry: window.appRegistry };
  if (m.includes('WindowManagerContext')) return { WindowManagerContext: window.WindowManagerContext };
  if (m.includes('types')) return {};
  if (m.startsWith('@react95/')) return {};\n  throw new Error('Module not found: ' + m);\n};\nlet exports = {};\n(function() {${transpiled}\n})();\nif (!exports.default) {\n  if (exports.FloatingWindowManager) exports.default = exports.FloatingWindowManager;\n  else if (exports.ScrollingWindowManager) exports.default = exports.ScrollingWindowManager;\n}\nexport default exports.default ?? exports;`;

    await fsOps.writeFile(`${dir}/main.js`, wrapped);

    const manifest: WMManifest = {
      id: info.id,
      name: info.name,
      icon: info.icon,
      entry: 'main.js',
    };
    await fsOps.writeFile(`${dir}/manifest.json`, JSON.stringify(manifest));
  }
} 