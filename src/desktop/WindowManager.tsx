import React, { useEffect, useRef, useState } from 'react';
import '@react95/sans-serif';
import { appRegistry } from './appRegistry';
import type { WindowInstance, AppWindowProps } from './types';

function createWindowInstance(appId: string, title: string): WindowInstance {
  return {
    id: crypto.randomUUID(),
    appId,
    title,
  };
}

export const WindowManager: React.FC = () => {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const openWindow = (appId: string) => {
    const app = appRegistry.find(a => a.id === appId);
    if (!app) return;
    // singleInstance check
    if (app.singleInstance) {
      const existing = windows.find(w => w.appId === appId);
      if (existing) {
        setActiveId(existing.id);
        return;
      }
    }
    const win = createWindowInstance(appId, app.name);
    setWindows(prev => [...prev, win]);
    setActiveId(win.id);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeId === id) setActiveId(null);
  };

  // Demo: open a window at mount to show something
  useEffect(() => {
    if (appRegistry.length > 0 && windows.length === 0) {
      openWindow(appRegistry[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll to active window
  useEffect(() => {
    if (!activeId) return;
    const el = document.getElementById(`window-${activeId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [activeId]);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        height: '100%',
        width: '100%',
      }}
    >
      {windows.map(win => {
        const app = appRegistry.find(a => a.id === win.appId);
        if (!app) return null;
        const AppComponent = app.component;
        const windowProps: AppWindowProps = {
          windowId: win.id,
          closeWindow: () => closeWindow(win.id),
        };
        return (
          <div
            key={win.id}
            id={`window-${win.id}`}
            onClick={() => setActiveId(win.id)}
            style={{
              minWidth: 400,
              maxWidth: 600,
              margin: 16,
              background: 'white',
              border: activeId === win.id ? '2px solid blue' : '2px solid #888',
              borderRadius: 4,
              boxShadow: '2px 2px 8px #0004',
            }}
          >
            <div
              style={{
                padding: '4px 8px',
                background: '#c0c0c0',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{win.title}</span>
              <button onClick={() => closeWindow(win.id)}>X</button>
            </div>
            <div style={{ padding: 8 }}>
              <AppComponent {...windowProps} />
            </div>
          </div>
        );
      })}
    </div>
  );
}; 