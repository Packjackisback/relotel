/// <reference types="vite/client" />
import type { AppDefinition, AppInfo } from './types';

// Vite will replace this glob with static imports at build time
const modules = import.meta.glob('../apps/*.tsx', { eager: true }) as Record<string, any>;

export const appRegistry: AppDefinition[] = Object.entries(modules).map(([path, mod]) => {
  const info: AppInfo = mod.appInfo ?? {
    id: path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'unknown',
    name: 'Unnamed',
    icon: '❓',
  };
  return {
    ...info,
    component: mod.default,
  } as AppDefinition;
}); 