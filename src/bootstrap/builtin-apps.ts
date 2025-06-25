import { fsOps } from '../files/fs-ops';
import type { AppInfo } from '../desktop/types';
import * as Babel from '@babel/standalone';

// Raw TSX code for each built-in app
const rawModules = import.meta.glob('../../default/apps/*.tsx', { eager: true, as: 'raw' }) as Record<string, string>;
// Runtime modules to access appInfo
const modModules = import.meta.glob('../../default/apps/*.tsx', { eager: true }) as Record<string, any>;

function pathToId(path: string): string {
  return path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'unknown';
}

export async function bootstrapBuiltInApps() {
  const existing = new Set<string>(await fsOps.readdir('/apps'));
  for (const [path, tsxCode] of Object.entries(rawModules)) {
    const mod = modModules[path];
    const info: AppInfo = mod.appInfo ?? {
      id: pathToId(path),
      name: pathToId(path),
      icon: '❓',
    };
    const id = info.id;
    const dir = `/apps/${id}`;
    // rewrite every time TODO: check for changes better 
    if (!existing.has(id)) {
      await fsOps.mkdir(dir);
    }

    // ---- Compile TSX to UMD JS (no imports) ----
    const { code: transpiled } = Babel.transform(tsxCode, {
      presets: [
        'typescript',
        // Use classic runtime so I don't have to rely on jsx-runtime import which would need bundling
        ['react', { runtime: 'classic' }],
      ],
      // Transform the (potential) ES module into UMD so I can stub require/exports easily
      plugins: [
        ['transform-modules-umd', { globals: { react: 'React', react95: 'React95' }, exactGlobals: true }],
      ],
      filename: `${id}.tsx`,
      sourceType: 'module',
    });

    /*
     * Wrap the transpiled UMD so that it can run in the browser without a bundler:
     * 1) Provide a minimal `require` implementation that maps React-related imports
     *    (react, react/jsx-runtime, react/jsx-dev-runtime) to the global React object.
     * 2) Pre-declare an `exports` object so that the CommonJS branch of the UMD picks it up.
     * 3) Execute the UMD factory immediately inside an IIFE.
     * 4) Re-export whatever ended up on `exports.default` (or the whole exports object) as the
     *    module default so that `import()` can consume it.
     */
    const wrapped = `const React = window.React;\nconst React95 = window.React95;\nconst require = (m) => {\n  if (m === 'react' || m === 'react/jsx-runtime' || m === 'react/jsx-dev-runtime') return React;\n  if (m === 'react95' || m.startsWith('react95/')) return React95;\n  if (m.includes('fs-ops')) return { fsOps: window.fsOps };\n  if (m.includes('app_installation')) return { installAppFromUserUpload: window.installAppFromUserUpload, installAppFromDirectory: window.installAppFromDirectory };\n  if (m.startsWith('@react95/')) return {}; // CSS / font side-effect modules\n  throw new Error('Module not found: ' + m);\n};\nlet exports = {};\n(function() {${transpiled}\n})();\nexport default exports.default ?? exports;`;

    await fsOps.writeFile(`${dir}/main.js`, wrapped);

    const manifest = {
      id: info.id,
      name: info.name,
      icon: info.icon,
      entry: 'main.js',
      type: 'app',
    };
    await fsOps.writeFile(`${dir}/manifest.json`, JSON.stringify(manifest));
  }
} 