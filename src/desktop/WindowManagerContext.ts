import React from 'react';

export interface WindowManagerAPI {
  openWindow: (appId: string) => void;
}

export const WindowManagerContext = React.createContext<WindowManagerAPI | null>(null); 