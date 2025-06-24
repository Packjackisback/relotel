// Package manifest format
export interface WebOSPackageManifest {
  id: string;
  name: string;
  version: string;
  type: 'app' | 'window-manager' | 'bar' | 'web-app' | string;
  icon?: string;
  description?: string;
  author?: string;
  entry: string; // main JS file
  files: string[]; // relative paths in the package
  install?: string; // install script filename (e.g., 'install.js')
  dependencies?: string[];
}

// Install script format (JS module exporting a function)
// The function receives a context with fsOps and other APIs, and returns a Promise
export type WebOSInstallScript = (ctx: {
  fsOps: any; // The fsOps API
  packageDir: string; // Where the package is staged
  installTo: (src: string, dest: string) => Promise<void>; // Helper to copy files
  log: (msg: string) => void;
}) => Promise<void>;

// Package structure in the virtual fs
export interface WebOSPackage {
  manifest: WebOSPackageManifest;
  files: Record<string, ArrayBuffer | string>; // filename -> file content
  installScript?: string; // JS code as string
} 