import { WebOSPackage, WebOSInstallScript } from '../types/package';
import { fsOps } from './fs-ops';

// Helper to copy a file from the package to the virtual fs
async function installTo(pkg: WebOSPackage, src: string, dest: string) {
  const content = pkg.files[src];
  if (content === undefined) throw new Error(`File not found in package: ${src}`);
  await fsOps.writeFile(dest, content);
}

// Main package runner
export async function runPackageInstall(pkg: WebOSPackage, log: (msg: string) => void = () => {}) {
  log(`Installing package: ${pkg.manifest.name} (${pkg.manifest.id})`);
  const packageDir = `/system/packages/${pkg.manifest.id}`;

  // Write all files to a staging area in the virtual fs
  for (const filename of pkg.manifest.files) {
    const content = pkg.files[filename];
    if (content === undefined) throw new Error(`Missing file: ${filename}`);
    await fsOps.writeFile(`${packageDir}/${filename}`, content);
  }

  // If there is an install script, run it
  if (pkg.installScript) {
    // eslint-disable-next-line no-eval
    const installFn: WebOSInstallScript = eval(pkg.installScript); // Should be a function
    await installFn({
      fsOps,
      packageDir,
      installTo: (src, dest) => installTo(pkg, src, dest),
      log,
    });
  } else {
    // Default: copy all files to /apps or /window-managers etc. based on type
    let destBase = '/apps';
    if (pkg.manifest.type === 'window-manager') destBase = '/window-managers';
    else if (pkg.manifest.type === 'bar') destBase = '/bars';
    else if (pkg.manifest.type === 'web-app') destBase = '/web-apps';
    for (const filename of pkg.manifest.files) {
      await installTo(pkg, filename, `${destBase}/${pkg.manifest.id}/${filename}`);
    }
  }
  log(`Package ${pkg.manifest.name} installed.`);
} 