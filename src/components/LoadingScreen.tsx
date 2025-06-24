import React from 'react';
import { Window, WindowHeader, WindowContent, Progress } from 'react95';
import '@react95/sans-serif';

export const LoadingScreen: React.FC<{ message?: string }> = ({ message = 'Loading, please wait...' }) => (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'teal' }}>
    <Window>
      <WindowHeader active>
        <span style={{ marginRight: 8 }}>⌛</span>
        WebOS
      </WindowHeader>
      <WindowContent>
        <p>{message}</p>
        <Progress variant="indeterminate" />
      </WindowContent>
    </Window>
  </div>
); 