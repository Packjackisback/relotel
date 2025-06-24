import React, { useState, useEffect, useRef } from 'react';
import { BottomBar } from './BottomBar';
import '@react95/sans-serif';
import { loadWindowManager } from './windowManagerLoader';
import { WindowInstance } from './types';
import { appRegistry, loadAppRegistry } from './appRegistry';

interface Process {
  id: string;
  appId: string;
  title: string;
  minimized: boolean;
}

export const MainScreen: React.FC = () => {
  const [startOpen, setStartOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement | null>(null);
  const [processes, setProcesses] = useState<Process[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [apps, setApps] = useState(appRegistry);
  const [WMComponent, setWMComponent] = useState<React.FC<any> | null>(null);

  useEffect(() => {
    loadAppRegistry().then(() => setApps([...appRegistry]));
  }, []);

  useEffect(() => {
    loadWindowManager().then(cmp => setWMComponent(() => cmp));
  }, []);

  // Window management logic
  const openWindow = (appId: string) => {
    const app = apps.find(a => a.id === appId);
    if (!app) return;
    if (app.singleInstance) {
      const existing = processes.find(p => p.appId === appId && !p.minimized);
      if (existing) {
        setActiveId(existing.id);
        return;
      }
    }
    const proc: Process = {
      id: crypto.randomUUID(),
      appId,
      title: app.name,
      minimized: false,
    };
    setProcesses(prev => [...prev, proc]);
    setActiveId(proc.id);
  };
  const closeWindow = (id: string) => {
    setProcesses(prev => prev.filter(p => p.id !== id));
    if (activeId === id) setActiveId(null);
  };
  const focusWindow = (id: string) => {
    setActiveId(prevActive => {
      if (prevActive === id) return prevActive; // already active
      return id;
    });
    setProcesses(prev => {
      let changed = false;
      const updated = prev.map(p => {
        if (p.id === id && p.minimized) {
          changed = true;
          return { ...p, minimized: false };
        }
        return p;
      });
      return changed ? updated : prev;
    });
  };
  const reorderWindows = (newOrder: WindowInstance[]) => {
    // Reorder processes to match newOrder (ignoring minimized)
    setProcesses(prev => {
      const minimized = prev.filter(p => p.minimized);
      const notMinimized = newOrder.map(w => prev.find(p => p.id === w.id && !p.minimized)).filter(Boolean) as Process[];
      return [...notMinimized, ...minimized];
    });
  };
  const minimizeWindow = (id: string) => {
    setProcesses(prev => prev.map(p => p.id === id ? { ...p, minimized: true } : p));
    if (activeId === id) setActiveId(null);
  };
  const restoreWindow = (id: string) => {
    setProcesses(prev => prev.map(p => p.id === id ? { ...p, minimized: false } : p));
    setActiveId(id);
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

  if (!WMComponent) {
    return <div style={{color:'white'}}>Loading window manager...</div>;
  }

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
        <WMComponent
          windows={processes.filter(p => !p.minimized).map(({ id, appId, title }) => ({ id, appId, title }))}
          activeId={activeId}
          onOpenWindow={openWindow}
          onCloseWindow={closeWindow}
          onFocusWindow={focusWindow}
          onReorderWindows={reorderWindows}
          onMinimizeWindow={minimizeWindow}
          onRequestStartMenu={() => setStartOpen(true)}
        >
          <BottomBar
            startOpen={startOpen}
            setStartOpen={setStartOpen}
            startMenuRef={startMenuRef}
            processes={processes}
            activeId={activeId}
            onMinimize={minimizeWindow}
            onRestore={restoreWindow}
          />
        </WMComponent>
      </div>
    </div>
  );
}; 