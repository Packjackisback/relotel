import React, { useState, useEffect, useRef } from 'react';
import { BottomBar } from './BottomBar';
import '@react95/sans-serif';
import { WindowManager } from './WindowManager';

export const MainScreen: React.FC = () => {
  const [startOpen, setStartOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement | null>(null);

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
        <WindowManager onRequestStartMenu={() => setStartOpen(true)}>
          <BottomBar startOpen={startOpen} setStartOpen={setStartOpen} startMenuRef={startMenuRef} />
        </WindowManager>
      </div>
    </div>
  );
}; 