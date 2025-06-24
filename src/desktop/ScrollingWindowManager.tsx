import React, { useEffect, useRef } from 'react';
import '@react95/sans-serif';
import { appRegistry } from './appRegistry';
import type { WindowInstance, AppWindowProps, WindowManagerProps } from './types';
import { WindowManagerContext } from './WindowManagerContext';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { WindowHeader } from 'react95';

// Metadata describing this window manager for the bootstrapper
export const wmInfo = {
  id: 'scrolling',
  name: 'Scrolling Window Manager',
  icon: '🖼️',
};

type WMProps = WindowManagerProps & { onRequestStartMenu?: () => void };

export const ScrollingWindowManager: React.FC<WMProps> = ({
  windows,
  activeId,
  onOpenWindow,
  onCloseWindow,
  onFocusWindow,
  onReorderWindows,
  onMinimizeWindow,
  children,
  onRequestStartMenu,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  // --- Keybinds ---
  useEffect(() => {
    const focusNextWindow = () => {
      if (windows.length === 0) return;
      if (!activeId) {
        onFocusWindow(windows[0].id);
        return;
      }
      const idx = windows.findIndex(w => w.id === activeId);
      onFocusWindow(windows[(idx + 1) % windows.length].id);
    };
    const focusPrevWindow = () => {
      if (windows.length === 0) return;
      if (!activeId) {
        onFocusWindow(windows[windows.length - 1].id);
        return;
      }
      const idx = windows.findIndex(w => w.id === activeId);
      onFocusWindow(windows[(idx - 1 + windows.length) % windows.length].id);
    };
    const moveActiveWindow = (dir: -1 | 1) => {
      if (!activeId) return;
      const idx = windows.findIndex(w => w.id === activeId);
      if (idx === -1) return;
      const newIdx = idx + dir;
      if (newIdx < 0 || newIdx >= windows.length) return;
      const newOrder = arrayMove(windows, idx, newIdx);
      onReorderWindows(newOrder);
    };
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      // Tab/Shift+Tab
      if (e.key === 'Tab' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        if (e.shiftKey) focusPrevWindow();
        else focusNextWindow();
      }
      // Alt+S: open Start menu
      if ((e.key === 's' || e.key === 'S') && e.altKey) {
        e.preventDefault();
        if (onRequestStartMenu) onRequestStartMenu();
      }
      // Ctrl+Left/Right: move window
      if (e.ctrlKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
        moveActiveWindow(e.key === 'ArrowLeft' ? -1 : 1);
      }
    };
    window.addEventListener('keydown', handler, { capture: true });
    return () => window.removeEventListener('keydown', handler, { capture: true });
  }, [windows, activeId, onFocusWindow, onReorderWindows, onRequestStartMenu]);

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = windows.findIndex(w => w.id === active.id);
    const newIndex = windows.findIndex(w => w.id === over.id);
    const newOrder = arrayMove(windows, oldIndex, newIndex);
    onReorderWindows(newOrder);
  };

  interface SortableWindowProps {
    win: WindowInstance;
    activeId: string | null;
    onActive: (id: string) => void;
    AppComponent: React.FC<AppWindowProps>;
    closeWindow: (id: string) => void;
    minimizeWindow?: (id: string) => void;
  }

  const SortableWindow: React.FC<SortableWindowProps> = ({ win, activeId, onActive, AppComponent, closeWindow, minimizeWindow }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: win.id });

    const style: React.CSSProperties = {
      minWidth: 320,
      maxWidth: '90vw',
      flex: '0 0 auto',
      margin: 16,
      background: 'white',
      border: activeId === win.id ? '2px solid blue' : '2px solid #888',
      borderRadius: 4,
      boxShadow: isDragging ? '4px 4px 12px #0006' : '2px 2px 8px #0004',
      // Only apply translation; force scale to 1 to avoid shaky resizes
      transform: transform ? CSS.Transform.toString({ ...transform, scaleX: 1, scaleY: 1 }) : undefined,
      transition,
      overflow: 'hidden',
    };

    const [maximized, setMaximized] = React.useState(false);
    const frameStyle: React.CSSProperties = maximized
      ? { position: 'relative', width: '100%', height: 'calc(100vh - 42px)', margin: 0 }
      : {};

    return (
      <div ref={setNodeRef} style={{ ...style, ...frameStyle }} id={`window-${win.id}`} onClick={() => onActive(win.id)}>
        {/* Get app info for icon */}
        {(() => {
          const app = appRegistry.find(a => a.id === win.appId);
          return (
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
                {/* App icon */}
                <span style={{ marginLeft: 6, marginRight: 6, fontSize: 18 }}>{app?.icon}</span>
                <span>{win.title}</span>
              </span>
              {/* Control buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                {/* Minimize */}
                <span
                  style={{
                    background: '#c0c0c0',
                    borderLeft: '2px solid #fff',
                    borderTop: '2px solid #fff',
                    borderRight: '2px solid #808080',
                    borderBottom: '2px solid #808080',
                    marginLeft: 8,
                    display: 'flex',
                    alignItems: 'center',
                    height: 24,
                    width: 28,
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    padding: 0,
                  }}
                >
                  <button
                    onPointerDown={e => e.stopPropagation()}
                    onClick={e => {
                      e.stopPropagation();
                      minimizeWindow?.(win.id);
                    }}
                    style={{
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
                    }}
                    aria-label="Minimize"
                  >
                    _
                  </button>
                </span>
                {/* Maximize/Restore */}
                <span
                  style={{
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
                  }}
                >
                  <button
                    onPointerDown={e => e.stopPropagation()}
                    onClick={e => {
                      e.stopPropagation();
                      setMaximized(prev => !prev);
                    }}
                    style={{
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
                    }}
                    aria-label="Maximize"
                  >
                    {maximized ? '🗗' : '🗖'}
                  </button>
                </span>
                {/* Close */}
                <span
                  style={{
                    background: '#c0c0c0',
                    borderLeft: '2px solid #fff',
                    borderTop: '2px solid #fff',
                    borderRight: '2px solid #808080',
                    borderBottom: '2px solid #808080',
                    marginLeft: 8,
                    marginRight: 2,
                    display: 'flex',
                    alignItems: 'center',
                    height: 24,
                    width: 28,
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                    padding: 0,
                  }}
                >
                  <button
                    onPointerDown={e => e.stopPropagation()}
                    onClick={e => { e.stopPropagation(); closeWindow(win.id); }}
                    style={{
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: 'inherit',
                      width: 24,
                      height: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0,
                    }}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </span>
              </div>
            </WindowHeader>
          );
        })()}
        <div style={{ padding: 8 }}>
          <AppComponent windowId={win.id} closeWindow={() => closeWindow(win.id)} />
        </div>
      </div>
    );
  };

  return (
    <WindowManagerContext.Provider value={{ openWindow: onOpenWindow }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', overflow: 'hidden' }}>
        <div
          style={{
            flexGrow: 1,
            overflowX: 'auto',
            overflowY: 'hidden',
            width: '100%',
            minHeight: 0,
            minWidth: 0,
          }}
          ref={containerRef}
        >
          <DndContext sensors={sensors} onDragEnd={onDragEnd}>
            <SortableContext items={windows.map(w => w.id)} strategy={horizontalListSortingStrategy}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: '100%',
                  width: 'fit-content',
                  minHeight: 0,
                  minWidth: 0,
                  overflow: 'hidden',
                }}
              >
                {windows.map(win => {
                  const app = appRegistry.find(a => a.id === win.appId);
                  if (!app) return null;
                  const AppComponent = app.component;
                  return (
                    <SortableWindow
                      key={win.id}
                      win={win}
                      activeId={activeId}
                      onActive={onFocusWindow}
                      AppComponent={AppComponent}
                      closeWindow={onCloseWindow}
                      minimizeWindow={onMinimizeWindow}
                    />
                  );
                })}
              </div>
            </SortableContext>
          </DndContext>
        </div>
        {children}
      </div>
    </WindowManagerContext.Provider>
  );
}; 
