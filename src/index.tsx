import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import { AccountCreation } from './account_creation';
import { bootstrapUserspace } from './bootstrap';
import { fsOps } from './files/fs-ops';
import '@react95/sans-serif';
import { MainScreen } from './desktop/MainScreen';

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

  useEffect(() => {
    fsOps.init(); // Only initialize fsOps once at app startup
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        {currentUser ? (
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