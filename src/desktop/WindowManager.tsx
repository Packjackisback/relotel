import React, { useEffect, useRef, useState } from 'react';
import '@react95/sans-serif';
import { appRegistry } from './appRegistry';
import type { WindowInstance, AppWindowProps } from './types';
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

function createWindowInstance(appId: string, title: string): WindowInstance {
  return {
    id: crypto.randomUUID(),
    appId,
    title,
  };
}

interface WMProps {
  children?: React.ReactNode;
}

export const WindowManager: React.FC<WMProps & { onRequestStartMenu?: () => void }> = ({ children, onRequestStartMenu }) => {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  // --- Window management helpers for keybinds ---
  const focusNextWindow = () => {
    if (windows.length === 0) return;
    if (!activeId) {
      setActiveId(windows[0].id);
      return;
    }
    const idx = windows.findIndex(w => w.id === activeId);
    setActiveId(windows[(idx + 1) % windows.length].id);
  };
  const focusPrevWindow = () => {
    if (windows.length === 0) return;
    if (!activeId) {
      setActiveId(windows[windows.length - 1].id);
      return;
    }
    const idx = windows.findIndex(w => w.id === activeId);
    setActiveId(windows[(idx - 1 + windows.length) % windows.length].id);
  };
  const closeActiveWindow = () => {
    if (!activeId) return;
    closeWindow(activeId);
  };
  const moveActiveWindow = (dir: -1 | 1) => {
    if (!activeId) return;
    const idx = windows.findIndex(w => w.id === activeId);
    if (idx === -1) return;
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= windows.length) return;
    setWindows(prev => arrayMove(prev, idx, newIdx));
  };

  // --- Keybinds ---
  useEffect(() => {
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
  }, [windows, activeId, onRequestStartMenu]);

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

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = windows.findIndex(w => w.id === active.id);
    const newIndex = windows.findIndex(w => w.id === over.id);
    setWindows(prev => arrayMove(prev, oldIndex, newIndex));
  };

  useEffect(() => {
    if (!activeId) return;
    const el = document.getElementById(`window-${activeId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [activeId]);

  // Sortable window component
  interface SortableWindowProps {
    win: WindowInstance;
    activeId: string | null;
    onActive: (id: string) => void;
    AppComponent: React.FC<AppWindowProps>;
    closeWindow: (id: string) => void;
  }

  const SortableWindow: React.FC<SortableWindowProps> = ({ win, activeId, onActive, AppComponent, closeWindow }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: win.id });

    const style: React.CSSProperties = {
      minWidth: 400,
      maxWidth: 600,
      margin: 16,
      background: 'white',
      border: activeId === win.id ? '2px solid blue' : '2px solid #888',
      borderRadius: 4,
      boxShadow: isDragging ? '4px 4px 12px #0006' : '2px 2px 8px #0004',
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div ref={setNodeRef} style={style} id={`window-${win.id}`} onClick={() => onActive(win.id)} {...attributes} {...listeners}>
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
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {/* App icon */}
                <span style={{ marginLeft: 6, marginRight: 6, fontSize: 18 }}>{app?.icon}</span>
                <span>{win.title}</span>
              </span>
              {/* X button in a grey box */}
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
    <WindowManagerContext.Provider value={{ openWindow }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flexGrow: 1, overflowX: 'auto' }} ref={containerRef}>
          <DndContext sensors={sensors} onDragEnd={onDragEnd}>
            <SortableContext items={windows.map(w => w.id)} strategy={horizontalListSortingStrategy}>
              <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                {windows.map(win => {
                  const app = appRegistry.find(a => a.id === win.appId);
                  if (!app) return null;
                  const AppComponent = app.component;

                  return <SortableWindow key={win.id} win={win} activeId={activeId} onActive={setActiveId} AppComponent={AppComponent} closeWindow={closeWindow} />;
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