import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import * as React95 from 'react95';
import * as DndKitCore from '@dnd-kit/core';
import * as DndKitSortable from '@dnd-kit/sortable';
import * as DndKitUtilities from '@dnd-kit/utilities';
import { appRegistry } from './desktop/appRegistry';
import { WindowManagerContext } from './desktop/WindowManagerContext';
// Expose the React95 component library globally so that dynamically-loaded
// UMD bundles for built-in apps can `require('react95')`.
(window as any).React95 = React95;
// Similarly, expose React itself so that bundles can access `window.React`.
(window as any).React = React;
(window as any).fsOps = fsOps;
(window as any).DndKitCore = DndKitCore;
(window as any).DndKitSortable = DndKitSortable;
(window as any).DndKitUtilities = DndKitUtilities;
(window as any).appRegistry = appRegistry;
(window as any).WindowManagerContext = WindowManagerContext;
import { AccountCreation } from './account_creation';
import { bootstrapUserspace } from './bootstrap';
import { fsOps } from './files/fs-ops';
import '@react95/sans-serif';
import { MainScreen } from './desktop/MainScreen';
import { bootstrapBuiltInApps } from './bootstrap/builtin-apps';
import { bootstrapBuiltInWindowManagers } from './bootstrap/builtin-window-managers';
import { LoadingScreen } from './components/LoadingScreen';
import { loadAppRegistry } from './desktop/appRegistry';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body {
    background: teal;
    font-family: 'R95 Sans Serif 14pt', 'ms_sans_serif', 'Arial', sans-serif;
  }
`;

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    (async () => {
      await fsOps.init();
      await bootstrapBuiltInApps();
      await bootstrapBuiltInWindowManagers();
      await loadAppRegistry();
      setBooting(false);
    })();
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        {booting ? (
          <LoadingScreen />
        ) : currentUser ? (
          <MainScreen />
        ) : (
          <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <AccountCreation
                onCreate={async (username, password) => {
                  const passwordHash = await hashPassword(password);
                  await bootstrapUserspace({ username, passwordHash });
                  alert(`Created user: ${username}`);
                  setCurrentUser(username);
                }}
                onLogin={async (username, password) => {
                  const passwordHash = await hashPassword(password);
                  const { UserService } = await import('./users/user-service');
                  const ok = await UserService.authenticate(username, passwordHash);
                  if (ok) {
                    setCurrentUser(username);
                  } else {
                    alert('Invalid username or password');
                  }
                }}
              />
            </div>
          </div>
        )}
      </ThemeProvider>
    </>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />); 