import React, { useState, useEffect } from 'react';
import { Window, WindowHeader, WindowContent, Tabs, TabBody, List, ListItem, Divider, Radio, Fieldset } from 'react95';
import '@react95/sans-serif';
import { fsOps } from '../files/fs-ops';

export const appInfo = {
  id: 'settings',
  name: 'Settings',
  icon: '🛠️',
};

interface WMInfo { id: string; name: string; icon?: string }

async function getWindowManagers(): Promise<WMInfo[]> {
  const dirs = await fsOps.readdir('/system/window-manager');
  const list: WMInfo[] = [];
  for (const dir of dirs) {
    try {
      const file = await fsOps.readFile(`/system/window-manager/${dir}/manifest.json`);
      const manifest = JSON.parse(String(file.content));
      list.push({ id: manifest.id, name: manifest.name, icon: manifest.icon });
    } catch (e) {
      console.error('Failed to load WM manifest', dir, e);
    }
  }
  return list;
}

const sections = [
  { id: 'wm', label: 'Window Manager' },
  { id: 'appearance', label: 'Appearance' },
  { id: 'about', label: 'About' },
];

const SettingsApp: React.FC = () => {
  const [section, setSection] = useState('wm');
  const [windowManagers, setWindowManagers] = useState<WMInfo[]>([]);
  const [selectedWM, setSelectedWM] = useState('');

  useEffect(() => {
    getWindowManagers().then(async list => {
      setWindowManagers(list);
      // Try to read current default
      try {
        const file = await fsOps.readFile('/system/window-manager/default.txt');
        const current = String(file.content).trim();
        if (current) {
          setSelectedWM(current);
          return;
        }
      } catch {}
      if (list.length > 0) {
        setSelectedWM(list[0].id);
      }
    });
  }, []);

  const applyChange = async () => {
    if (!selectedWM) return;
    await fsOps.writeFile('/system/window-manager/default.txt', selectedWM);
    // Simple approach: reload the page so MainScreen reinitialises with new WM
    window.location.reload();
  };

  return (
    <Window style={{ width: 360, maxWidth: '90vw', minHeight: 320 }}>
      <WindowHeader active style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          <span style={{ marginRight: 8 }}>{appInfo.icon}</span>
          Settings
        </span>
      </WindowHeader>
      <WindowContent style={{ display: 'flex', height: '100%' }}>
        {/* Sidebar for sections */}
        <div style={{ minWidth: 120, borderRight: '1px solid #ccc', marginRight: 16 }}>
          <List>
            {sections.map(s => (
              <ListItem
                key={s.id}
                onClick={() => setSection(s.id)}
                style={{ fontWeight: section === s.id ? 'bold' : undefined }}
                >
                {s.label}
              </ListItem>
            ))}
          </List>
        </div>
        {/* Section content */}
        <div style={{ flex: 1 }}>
          {section === 'wm' && (
            <Fieldset label="Window Manager">
              <List>
                {windowManagers.map(wm => (
                  <ListItem
                    key={wm.id}
                    onClick={() => setSelectedWM(wm.id)}
                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                  >
                    <Radio
                      name="wm-choice"
                      checked={selectedWM === wm.id}
                      onChange={() => setSelectedWM(wm.id)}
                      style={{ marginRight: 8 }}
                    />
                    {wm.icon && <span style={{ marginRight: 4 }}>{wm.icon}</span>}
                    {wm.name}
                  </ListItem>
                ))}
              </List>
              <div style={{ marginTop: 12 }}>
                <button onClick={applyChange} disabled={!selectedWM}>
                  Apply
                </button>
              </div>
            </Fieldset>
          )}
          {section === 'appearance' && (
            <Fieldset label="Appearance">
              <div>Theme and appearance settings coming soon.</div>
            </Fieldset>
          )}
          {section === 'about' && (
            <Fieldset label="About">
              <div>WebOS Settings App<br/>Version 1.0</div>
            </Fieldset>
          )}
        </div>
      </WindowContent>
    </Window>
  );
};

export default SettingsApp; 