import React, { useEffect, useState, useContext } from 'react';
import { AppBar, Toolbar, Button, List, ListItem, Divider } from 'react95';
import '@react95/sans-serif';
import { appRegistry, loadAppRegistry } from './appRegistry';
import { WindowManagerContext } from './WindowManagerContext';

interface Process {
  id: string;
  appId: string;
  title: string;
  minimized: boolean;
}

interface BottomBarProps {
  startOpen: boolean;
  setStartOpen: (open: boolean) => void;
  startMenuRef?: React.RefObject<HTMLDivElement | null>;
  processes?: Process[];
  activeId?: string | null;
  onMinimize?: (id: string) => void;
  onRestore?: (id: string) => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({ startOpen, setStartOpen, startMenuRef, processes = [], activeId, onMinimize, onRestore }) => {
  const [time, setTime] = useState(new Date());
  const [apps, setApps] = useState(appRegistry);
  const wm = useContext(WindowManagerContext);

  useEffect(() => {
    if (apps.length === 0) {
      loadAppRegistry().then(() => setApps([...appRegistry]));
    }
  }, []);

  useEffect(() => {
    if (startOpen) {
      loadAppRegistry().then(() => setApps([...appRegistry]));
    }
  }, [startOpen]);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        style={{ bottom: 0, left: 0, right: 0, top: 'auto', height: 42 }}
      >
        <Toolbar style={{ width: '100%' }}>
          <Button
            primary
            size="sm"
            style={{ marginRight: 4, marginBottom: 2 }}
            onClick={() => setStartOpen(!startOpen)}
          >
            Start
          </Button>
          {/* Taskbar: process list */}
          <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: 4 }}>
            {processes.map(proc => {
              const app = apps.find(a => a.id === proc.appId);
              const isActive = proc.id === activeId && !proc.minimized;
              return (
                <Button
                  key={proc.id}
                  active={isActive}
                  size="sm"
                  style={{ minWidth: 80, fontWeight: isActive ? 'bold' : undefined, opacity: proc.minimized ? 0.5 : 1 }}
                  onClick={() => {
                    if (proc.minimized && onRestore) onRestore(proc.id);
                    else if (!proc.minimized && onMinimize) onMinimize(proc.id);
                  }}
                  title={proc.title}
                >
                  <span style={{ marginRight: 4 }}>{app?.icon}</span>
                  {proc.title}
                </Button>
              );
            })}
          </div>
          <span style={{ marginRight: 8, fontFamily: 'R95 Sans Serif 14pt' }}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </Toolbar>
      </AppBar>

      {startOpen && (
        <div
          ref={startMenuRef}
          style={{
            position: 'fixed',
            bottom: 32, // just above the bar
            left: 0,
            zIndex: 2000,
          }}
        >
          <List style={{ minWidth: 200 }}>
            {apps.map(app => (
              <ListItem
                key={app.id}
                onClick={() => {
                  setStartOpen(false);
                  wm?.openWindow(app.id);
                }}
              >
                <span style={{ marginRight: 8 }}>{app.icon}</span>
                {app.name}
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </>
  );
}; 