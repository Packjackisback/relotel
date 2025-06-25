import React, { useEffect, useState } from 'react';
import '@react95/sans-serif';
import { appRegistry } from '../../src/desktop/appRegistry';
import type { WindowInstance, AppWindowProps, WindowManagerProps } from '../../src/desktop/types';
import { WindowManagerContext } from '../../src/desktop/WindowManagerContext';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  useDraggable,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { WindowHeader } from 'react95';

export const wmInfo = {
  id: 'floating',
  name: 'Floating Window Manager',
  icon: '🪟',
};

type WMProps = WindowManagerProps & { onRequestStartMenu?: () => void };

export const FloatingWindowManager: React.FC<WMProps> = ({
  windows,
  activeId,
  onOpenWindow,
  onCloseWindow,
  onFocusWindow,
  onReorderWindows,
  onMinimizeWindow,
  children,
}) => {
  const sensors = useSensors(useSensor(PointerSensor));

  // Track per-window position
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});
  // Maintain simple z-order list (back→front)
  const [zOrder, setZOrder] = useState<string[]>([]);

  // Ensure all current windows have default positions and appear in z-order
  useEffect(() => {
    // Add newly opened windows
    setPositions(prev => {
      const next = { ...prev };
      windows.forEach((w, idx) => {
        if (!next[w.id]) {
          // Stagger new windows diagonally for visibility
          const offset = 30 * idx;
          next[w.id] = { x: offset, y: offset };
        }
      });
      // Remove closed windows
      Object.keys(next).forEach(id => {
        if (!windows.find(w => w.id === id)) delete next[id];
      });
      return next;
    });

    // Sync z-order
    setZOrder(prev => {
      let order = [...prev];
      windows.forEach(w => {
        if (!order.includes(w.id)) order.push(w.id);
      });
      order = order.filter(id => windows.some(w => w.id === id));
      return order;
    });
  }, [windows]);

  const bringToFront = (id: string) => {
    setZOrder(prev => {
      const without = prev.filter(wid => wid !== id);
      return [...without, id];
    });
    onFocusWindow(id);
    // Optionally inform parent about new stacking order (active win last)
    onReorderWindows([
      ...windows.filter(w => w.id !== id),
      windows.find(w => w.id === id)!,
    ]);
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    setPositions(prev => {
      const current = prev[active.id as string] ?? { x: 0, y: 0 };
      return {
        ...prev,
        [active.id as string]: {
          x: current.x + delta.x,
          y: current.y + delta.y,
        },
      };
    });
    bringToFront(active.id as string);
  };

  // Shared styling helpers for header buttons
  const frameButton: React.CSSProperties = {
    background: '#c0c0c0',
    borderLeft: '2px solid #fff',
    borderTop: '2px solid #fff',
    borderRight: '2px solid #808080',
    borderBottom: '2px solid #808080',
    display: 'flex',
    alignItems: 'center',
    height: 24,
    width: 28,
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: 0,
  };
  const buttonInner: React.CSSProperties = {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontWeight: 'bold',
    fontSize: 12,
    color: 'inherit',
    width: 24,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  };

  interface DraggableWindowProps {
    win: WindowInstance;
  }

  const DraggableWindow: React.FC<DraggableWindowProps> = ({ win }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: win.id });
    const pos = positions[win.id] ?? { x: 0, y: 0 };
    const translate = transform ? { x: transform.x, y: transform.y } : { x: 0, y: 0 };
    const zIndex = 100 + zOrder.indexOf(win.id); // simple base offset so bar/menu stay on top if needed

    // Maximize/restore
    const [maximized, setMaximized] = useState(false);

    // Combine base + drag transform when not maximized
    const style: React.CSSProperties = maximized
      ? {
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100vw',
          height: 'calc(100vh - 42px)', // keep above task bar
          margin: 0,
          zIndex,
          background: 'white',
          border: activeId === win.id ? '2px solid blue' : '2px solid #888',
          borderRadius: 4,
          boxShadow: isDragging ? '4px 4px 12px #0006' : '2px 2px 8px #0004',
          overflow: 'hidden',
        }
      : {
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          transform: CSS.Translate.toString({ x: translate.x, y: translate.y, scaleX: 1, scaleY: 1 }),
          width: 400,
          zIndex,
          background: 'white',
          border: activeId === win.id ? '2px solid blue' : '2px solid #888',
          borderRadius: 4,
          boxShadow: isDragging ? '4px 4px 12px #0006' : '2px 2px 8px #0004',
          overflow: 'hidden',
        };

    const app = appRegistry.find(a => a.id === win.appId);
    const AppComponent = app?.component as React.FC<AppWindowProps> | undefined;
    if (!AppComponent) return null;

    return (
      <div
        ref={setNodeRef}
        style={style}
        id={`window-${win.id}`}
        onMouseDown={() => bringToFront(win.id)}
      >
        <WindowHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'grab',
            userSelect: 'none',
            paddingRight: 0,
            paddingLeft: 0,
          }}
          active={activeId === win.id}
          {...listeners}
          {...attributes}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ marginLeft: 6, marginRight: 6, fontSize: 18 }}>{app?.icon}</span>
            <span>{win.title}</span>
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {/* Minimize */}
            <span style={frameButton}>
              <button
                onPointerDown={e => e.stopPropagation()}
                onClick={e => {
                  e.stopPropagation();
                  onMinimizeWindow?.(win.id);
                }}
                style={buttonInner}
                aria-label="Minimize"
              >
                _
              </button>
            </span>
            {/* Maximize/Restore */}
            <span style={frameButton}>
              <button
                onPointerDown={e => e.stopPropagation()}
                onClick={e => {
                  e.stopPropagation();
                  setMaximized(prev => !prev);
                }}
                style={buttonInner}
                aria-label="Maximize"
              >
                {maximized ? '🗗' : '🗖'}
              </button>
            </span>
            {/* Close */}
            <span style={{ ...frameButton, marginRight: 2 }}>
              <button
                onPointerDown={e => e.stopPropagation()}
                onClick={e => {
                  e.stopPropagation();
                  onCloseWindow(win.id);
                }}
                style={{ ...buttonInner, fontSize: 16 }}
                aria-label="Close"
              >
                ×
              </button>
            </span>
          </div>
        </WindowHeader>
        <div style={{ padding: 8, height: maximized ? 'calc(100% - 32px)' : undefined, overflow: 'auto' }}>
          <AppComponent windowId={win.id} closeWindow={() => onCloseWindow(win.id)} />
        </div>
      </div>
    );
  };

  return (
    <WindowManagerContext.Provider value={{ openWindow: onOpenWindow }}>
      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          {windows.map(win => (
            <DraggableWindow key={win.id} win={win} />
          ))}
        </div>
      </DndContext>
      {children}
    </WindowManagerContext.Provider>
  );
};

export default FloatingWindowManager; 