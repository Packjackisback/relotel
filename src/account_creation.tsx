import React, { useState } from 'react';
import { Window, WindowHeader, WindowContent, TextField, Button, Panel } from 'react95';
import '@react95/sans-serif';

type Mode = 'create' | 'login';

interface Props {
  onCreate?: (username: string, password: string) => void;
  onLogin?: (username: string, password: string) => void;
  initialMode?: Mode;
}

export function AccountCreation({ onCreate, onLogin, initialMode = 'login' }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<Mode>(initialMode);

  const isLogin = mode === 'login';

  return (
    <Window
      style={{
        width: 380,
        fontFamily: `'R95 Sans Serif 14pt', 'ms_sans_serif', 'Arial', sans-serif`,
      }}
    >
      <WindowHeader>
        <span>{isLogin ? 'Welcome' : 'Create New User'}</span>
      </WindowHeader>
      <WindowContent>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (isLogin) {
              onLogin?.(username, password);
            } else {
              onCreate?.(username, password);
            }
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <TextField
              fullWidth
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <TextField
              fullWidth
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Panel variant="well" style={{ marginBottom: 10, padding: 4, fontSize: 12 }}>
            {isLogin
              ? 'Enter your username and password.'
              : 'Please choose a username and password.'}
          </Panel>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Button type="submit" primary>
              {isLogin ? 'Login' : 'Create Account'}
            </Button>
            <Button
              onClick={() => setMode(isLogin ? 'create' : 'login')}
              style={{ flexShrink: 0 }}
            >
              {isLogin ? 'Create Account' : 'Back to Login'}
            </Button>
          </div>
        </form>
      </WindowContent>
    </Window>
  );
} 