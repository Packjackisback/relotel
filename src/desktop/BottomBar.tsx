import React, { useEffect, useState, useContext } from 'react';
import { AppBar, Toolbar, Button, List, ListItem, Divider } from 'react95';
import '@react95/sans-serif';
import { appRegistry } from './appRegistry';
import { WindowManagerContext } from './WindowManagerContext';

interface BottomBarProps {
  startOpen: boolean;
  setStartOpen: (open: boolean) => void;
  startMenuRef?: React.RefObject<HTMLDivElement>;
}

export const BottomBar: React.FC<BottomBarProps> = ({ startOpen, setStartOpen, startMenuRef }) => {
  const [time, setTime] = useState(new Date());
  const wm = useContext(WindowManagerContext);

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
          <div style={{ flexGrow: 1 }} />
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
            {appRegistry.map(app => (
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