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