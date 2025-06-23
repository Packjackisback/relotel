import React from 'react';
import { BottomBar } from './BottomBar';
import '@react95/sans-serif';
import { WindowManager } from './WindowManager';

export const MainScreen: React.FC = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'teal',
        fontFamily: 'R95 Sans Serif 14pt',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Desktop area (scrolling windows) */}
      <div style={{ flexGrow: 1, overflow: 'hidden' }}>
        {/* WindowManager fills this area */}
        <WindowManager />
      </div>
      <BottomBar />
    </div>
  );
}; 