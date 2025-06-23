import React from 'react';
import '@react95/sans-serif';

export const appInfo = {
  id: 'keybinds',
  name: 'Keybinds',
  icon: '⌨️',
};

const keybinds = [
  { keys: 'Tab', desc: 'Cycle focus to next window' },
  { keys: 'Shift+Tab', desc: 'Cycle focus to previous window' },
  { keys: 'Alt+S', desc: 'Open Start menu' },
  { keys: 'Ctrl+←/→', desc: 'Move window left/right' },
  { keys: 'Drag window', desc: 'Reorder windows' },
];

const KeybindsApp: React.FC = () => (
  <div style={{ padding: 16, fontFamily: 'R95 Sans Serif 14pt' }}>
    <h2 style={{ marginTop: 0 }}>Window Manager Keybinds</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {keybinds.map(kb => (
          <tr key={kb.keys}>
            <td style={{ padding: 4, fontWeight: 'bold', width: 120 }}>{kb.keys}</td>
            <td style={{ padding: 4 }}>{kb.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default KeybindsApp; 