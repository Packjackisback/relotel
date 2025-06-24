import React, { useEffect, useState } from 'react';
import { Window, WindowHeader, WindowContent, List, ListItem, Button, Fieldset } from 'react95';
import '@react95/sans-serif';
import { fsOps } from '../files/fs-ops';

export const appInfo = {
  id: 'filemanager',
  name: 'File Manager',
  icon: '📁',
};

const FileManagerApp: React.FC = () => {
  const [cwd, setCwd] = useState('/');
  const [entries, setEntries] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDir = async (dir: string) => {
    setLoading(true);
    setError(null);
    try {
      const files = await fsOps.readdir(dir);
      setEntries(files);
      setCwd(dir);
    } catch (e: any) {
      setError(e.message || 'Failed to read directory');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDir(cwd);
    // Debug: print the root directory listing when the app first loads
    fsOps.readdir('/').then(list => {
      console.log('[FileManager] Root directory:', list);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = (name: string) => {
    const path = cwd.endsWith('/') ? cwd + name : cwd + '/' + name;
    loadDir(path);
  };

  const handleUp = () => {
    if (cwd === '/') return;
    const parent = cwd.replace(/\/?[^/]+\/?$/, '') || '/';
    loadDir(parent);
  };

  return (
    <Window style={{ width: 420, minHeight: 320 }}>
      <WindowHeader active>
        <span style={{ marginRight: 8 }}>{appInfo.icon}</span>
        File Manager
      </WindowHeader>
      <WindowContent>
        <Fieldset label="Current Directory" style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button size="sm" onClick={handleUp} disabled={cwd === '/'} style={{ marginRight: 8 }}>
              Up
            </Button>
            <span style={{ fontFamily: 'monospace' }}>{cwd}</span>
          </div>
        </Fieldset>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div style={{ color: 'red' }}>{error}</div>
        ) : (
          <List style={{ minHeight: 180 }}>
            {entries.map(name => (
              <ListItem key={name} onDoubleClick={() => handleOpen(name)}>
                {name}
              </ListItem>
            ))}
          </List>
        )}
      </WindowContent>
    </Window>
  );
};

export default FileManagerApp; 