import { fsOps } from '../files/fs-ops';
import type { WindowManagerProps } from './types';
import React from 'react';

// ID of the WM to load – in future could be user setting; for now hard-coded.
const WM_ID = 'scrolling';

let cachedComponent: React.FC<WindowManagerProps> | null = null;

export async function loadWindowManager(): Promise<React.FC<WindowManagerProps>> {
  if (cachedComponent) return cachedComponent;

  // Resolve manifest
  const manifestFile = await fsOps.readFile(`/system/window-manager/${WM_ID}/manifest.json`);
  const manifest = JSON.parse(String(manifestFile.content));

  const codeFile = await fsOps.readFile(`/system/window-manager/${WM_ID}/${manifest.entry}`);
  const code = String(codeFile.content);

  let component: any = null;
  try {
    const url = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
    const mod = await import(/* @vite-ignore */ url);
    URL.revokeObjectURL(url);
    component = mod.default;
    if (component && typeof component !== 'function' && component.ScrollingWindowManager) {
      component = component.ScrollingWindowManager;
    }
  } catch (err) {
    // Fallback: strip import/export and eval
    try {
      const transformed = code
        .split('\n')
        .filter(line => !line.startsWith('import '))
        .join('\n')
        .replace(/export\s+default/, 'return');
      const fn = new Function('React', transformed);
      component = fn(React);
    } catch (err2) {
      console.error('Failed to eval window manager', err2);
      throw err;
    }
  }

  if (!component) throw new Error('Window manager component not found');
  cachedComponent = component;
  return component as React.FC<WindowManagerProps>;
} 