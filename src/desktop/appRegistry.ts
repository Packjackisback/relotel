/// <reference types="vite/client" />
import type { AppDefinition, AppInfo } from './types';
import { fsOps } from '../files/fs-ops';
import React from 'react';

interface AppManifest extends AppInfo {
  entry: string;
  singleInstance?: boolean;
}

export const appRegistry: AppDefinition[] = [];

export async function loadAppRegistry(): Promise<void> {
  const apps = await getAppRegistry();
  appRegistry.splice(0, appRegistry.length, ...apps);
}

// Dynamically load apps from /apps/ in the virtual filesystem
export async function getAppRegistry(): Promise<AppDefinition[]> {
  const appDirs = await fsOps.readdir('/apps');
  const apps: AppDefinition[] = [];
  for (const dir of appDirs) {
    try {
      const manifestFile = await fsOps.readFile(`/apps/${dir}/manifest.json`);
      const manifest: AppManifest = JSON.parse(String(manifestFile.content));
      const codeFile = await fsOps.readFile(`/apps/${dir}/${manifest.entry}`);
      const code = String(codeFile.content);
      let component: any = null;
      try {
        const blob = new Blob([code], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const mod = await import(/* @vite-ignore */ url);
        URL.revokeObjectURL(url);
        component = mod.default;
      } catch (err) {
        // Fallback: strip import/export and eval with React global
        try {
          const transformed = code
            .split('\n')
            .filter(line => !line.startsWith('import '))
            .join('\n')
            .replace(/export\s+default/, 'return');
          const fn = new Function('React', transformed);
          component = fn(React);
        } catch (err2) {
          console.error('Fallback eval failed for', dir, err2);
          throw err;
        }
      }
      if (!component) throw new Error('No component');
      apps.push({
        id: manifest.id,
        name: manifest.name,
        icon: manifest.icon || '❓',
        singleInstance: manifest.singleInstance,
        component,
      });
    } catch (e) {
      // Ignore broken apps
      console.error('Failed to load app', dir, e);
    }
  }
  return apps;
} 