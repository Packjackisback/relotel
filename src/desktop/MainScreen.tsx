import React, { useState, useEffect, useRef } from 'react';
import { BottomBar } from './BottomBar';
import '@react95/sans-serif';
import { WindowManager } from './WindowManager';
import { WindowInstance } from './types';
import { appRegistry } from './appRegistry';

export const MainScreen: React.FC = () => {
  const [startOpen, setStartOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement | null>(null);
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Window management logic
  const openWindow = (appId: string) => {
    const app = appRegistry.find(a => a.id === appId);
    if (!app) return;
    if (app.singleInstance) {
      const existing = windows.find(w => w.appId === appId);
      if (existing) {
        setActiveId(existing.id);
        return;
      }
    }
    const win: WindowInstance = {
      id: crypto.randomUUID(),
      appId,
      title: app.name,
    };
    setWindows(prev => [...prev, win]);
    setActiveId(win.id);
  };
  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeId === id) setActiveId(null);
  };
  const focusWindow = (id: string) => {
    setActiveId(id);
  };
  const reorderWindows = (newOrder: WindowInstance[]) => {
    setWindows(newOrder);
  };

  // Close Start menu on click outside, Escape, or Alt+S again
  useEffect(() => {
    if (!startOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (startMenuRef.current && !startMenuRef.current.contains(e.target as Node)) {
        setStartOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setStartOpen(false);
      }
      if ((e.key === 's' || e.key === 'S') && e.altKey) {
        setStartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [startOpen]);

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
      {/* Desktop area (scrolling windows + bottom bar wrapped together) */}
      <div style={{ flexGrow: 1, overflow: 'hidden' }}>
        <WindowManager
          windows={windows}
          activeId={activeId}
          onOpenWindow={openWindow}
          onCloseWindow={closeWindow}
          onFocusWindow={focusWindow}
          onReorderWindows={reorderWindows}
          onRequestStartMenu={() => setStartOpen(true)}
        >
          <BottomBar startOpen={startOpen} setStartOpen={setStartOpen} startMenuRef={startMenuRef} />
        </WindowManager>
      </div>
    </div>
  );
}; 