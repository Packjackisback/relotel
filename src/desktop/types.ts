import React from 'react';

// Metadata developers must export next to their component
export interface AppInfo {
  id: string;
  name: string;
  icon: string | React.ReactNode;
  singleInstance?: boolean;
}

export interface AppWindowProps {
  windowId: string;
  closeWindow: () => void;
}

// Internal definition with the loaded component
export interface AppDefinition extends AppInfo {
  component: React.FC<AppWindowProps>;
}

export interface WindowInstance {
  id: string;
  appId: string;
  title: string;
}

// Contract for pluggable window managers
export interface WindowManagerProps {
  windows: WindowInstance[];
  activeId: string | null;
  onOpenWindow: (appId: string) => void;
  onCloseWindow: (windowId: string) => void;
  onFocusWindow: (windowId: string) => void;
  onReorderWindows: (newOrder: WindowInstance[]) => void;
  onMinimizeWindow?: (windowId: string) => void;
  children?: React.ReactNode;
} 