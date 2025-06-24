import { fsOps } from '../files/fs-ops';
import type { WindowManagerProps } from './types';
import React from 'react';

export const DEFAULT_WM_FILE = '/system/window-manager/default.txt';

async function getDefaultWMId(): Promise<string> {
  try {
    const file = await fsOps.readFile(DEFAULT_WM_FILE);
    const id = String(file.content).trim();
    return id || 'scrolling';
  } catch {
    return 'scrolling';
  }
}

export async function setDefaultWMId(id: string): Promise<void> {
  await fsOps.writeFile(DEFAULT_WM_FILE, id);
}

const cache = new Map<string, React.FC<WindowManagerProps>>();

export async function loadWindowManager(forceId?: string): Promise<React.FC<WindowManagerProps>> {
  const wmId = forceId ?? (await getDefaultWMId());

  if (cache.has(wmId)) return cache.get(wmId)!;

  // Resolve manifest
  const manifestFile = await fsOps.readFile(`/system/window-manager/${wmId}/manifest.json`);
  const manifest = JSON.parse(String(manifestFile.content));

  const codeFile = await fsOps.readFile(`/system/window-manager/${wmId}/${manifest.entry}`);
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
  cache.set(wmId, component);
  return component as React.FC<WindowManagerProps>;
} 