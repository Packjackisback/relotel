import * as Babel from '@babel/standalone';
import type { App, AppFile, Manifest } from './types'; // your App types
import { fsOps } from '../files/fs-ops';

export async function installAppFromUserUpload(app: App): Promise<void> {
  const { manifest, files } = app;
  const id = manifest.id;
  const dir = `/apps/${id}`;

  const fileMap = new Map<string, string>(
    files.map((f) => [f.path.replace(/^\.?\//, ''), f.content])
  );

  const entryCode = fileMap.get(manifest.entry);
  if (!entryCode) {
    throw new Error(`Entry file "${manifest.entry}" not found`);
  }

  const { code: transpiled } = Babel.transform(entryCode, {
    presets: [
      'typescript',
      ['react', { runtime: 'classic' }],
    ],
    plugins: [
      ['transform-modules-umd', {
        globals: { react: 'React', react95: 'React95' },
        exactGlobals: true,
      }],
    ],
    filename: `${id}.tsx`,
    sourceType: 'module',
  });

  const wrapped = `const React = window.React;\nconst React95 = window.React95;\nconst require = (m) => {
    if (m === 'react' || m === 'react/jsx-runtime' || m === 'react/jsx-dev-runtime') return React;
    if (m === 'react95' || m.startsWith('react95/')) return React95;
    if (m.includes('fs-ops')) return { fsOps: window.fsOps };
    if (m.includes('app_installation')) return { installAppFromUserUpload: window.installAppFromUserUpload, installAppFromDirectory: window.installAppFromDirectory };
    if (m.startsWith('@react95/')) return {};
    throw new Error('Module not found: ' + m);
  };
  let exports = {};
  (function() {
    ${transpiled}
  })();
  export default exports.default ?? exports;`;

  await fsOps.mkdir(dir);
  await fsOps.writeFile(`${dir}/main.js`, wrapped);
  await fsOps.writeFile(`${dir}/manifest.json`, JSON.stringify({
    ...manifest,
    entry: 'main.js',
    type: 'app',
  }));

  console.log(`App "${manifest.name}" installed to ${dir}`);
}

const REQUIRED_MANIFEST_FIELDS = ['id', 'name', 'entry'];

function validateManifest(manifest: any): asserts manifest is Manifest {
  if (typeof manifest !== 'object' || manifest === null) {
    throw new Error('Manifest must be a JSON object');
  }

  for (const field of REQUIRED_MANIFEST_FIELDS) {
    if (typeof manifest[field] !== 'string' || manifest[field].trim() === '') {
      throw new Error(`Manifest is missing or has invalid "${field}"`);
    }
  }

  if (manifest.icon && typeof manifest.icon !== 'string') {
    throw new Error('Manifest "icon" must be a string if provided');
  }
}



export async function installAppFromDirectory(files: FileList): Promise<App> {
const fileArray = Array.from(files);
    const fileMap = new Map<string, File>();
  
    for (const file of fileArray) {
      if (!file.webkitRelativePath) continue;
      const relPath = file.webkitRelativePath.replace(/^\.?\//, '');
      fileMap.set(relPath, file);
    }
  
    const manifestFile = fileMap.get('manifest.json');
    if (!manifestFile) {
      throw new Error('Missing manifest.json in uploaded app');
    }
  
    let manifest: Manifest;
    try {
      const manifestText = await manifestFile.text();
      manifest = JSON.parse(manifestText);
      validateManifest(manifest); 
    } catch (err) {
      throw new Error('Invalid manifest.json: ' + (err as Error).message);
    }
  
    if (!manifest.id || !manifest.entry) {
      throw new Error('Manifest must include "id" and "entry"');
    }
  
    const filesContent: AppFile[] = [];
    for (const [path, file] of fileMap.entries()) {
      const content = await file.text();
      filesContent.push({ path, content });
    }
  
    const app: App = {
      id: manifest.id,
      manifest,
      files: filesContent,
      installedAt: new Date(),
      status: 'stopped',
    };
  
    return app;
}