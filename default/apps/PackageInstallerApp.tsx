import React, { useState } from 'react';
import '@react95/sans-serif';
import type { App } from '../../src/apps/types';
import { installAppFromDirectory, installAppFromUserUpload } from '../../src/apps/app_installation';

export const appInfo = {
  id: 'package-installer',
  name: 'Package Installer',
  icon: '📦',
};

const PackageInstallerApp: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setStatus('Reading package...');
    try {
      const app: App = await installAppFromDirectory(files);
      setStatus(`Installing "${app.manifest.name}"...`);
      await installAppFromUserUpload(app);
      setStatus(`Installed "${app.manifest.name}"`);
    } catch (err: any) {
      console.error(err);
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 8 }}>
      <p>Upload a package (folder with manifest.json):</p>
      <label style={{ display: 'inline-block', marginTop: 10 }}>
        <button>Choose Package Folder</button>
        <input
          type="file"
          style={{ display: 'none' }}
          multiple
          onChange={handleUpload}
          // @ts-ignore: webkitdirectory is non-standard
          webkitdirectory=""
        />
      </label>
      {status && <p style={{ marginTop: 10 }}>{status}</p>}
    </div>
  );
};

export default PackageInstallerApp;
