import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button } from 'react95';
import '@react95/sans-serif';

export const BottomBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <AppBar position="fixed" style={{ bottom: 0, left: 0, right: 0, height: 42, top: 'auto' }}>
      <Toolbar style={{ width: '100%' }}>
        <Button primary size="sm" style={{ marginRight: 4, marginBottom: 2}}>
          Start
        </Button>
        <div style={{ flexGrow: 1 }} />
        <span style={{ marginRight: 8, fontFamily: 'R95 Sans Serif 14pt' }}>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </Toolbar>
    </AppBar>
  );
}; 