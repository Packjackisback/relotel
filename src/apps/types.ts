export type Manifest = {
  id: string; // Required: Unique slug for the package
  name: string; // Required: Human-readable name
  entry: string; // Required: Path to JS bundle inside the same directory
  icon?: string; // Optional: Emoji or small string
  type?: "app" | "wm"; // Optional (apps only): Must be "app" if present
  singleInstance?: boolean; // Optional (apps only): true = one window, false/undefined = many
};

export interface AppFile {
  path: string; // relative path in the uploaded directory
  content: string; // file content as text
}

export interface App {
  id: string; // unique ID from manifest
  manifest: Manifest;
  files: AppFile[];
  installedAt: Date;
  status?: 'running' | 'stopped' | 'error';
}

