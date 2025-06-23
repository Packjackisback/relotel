import type { File } from '../files/file-metadata';

export interface User {
  id: string; // Unique user ID
  username: string;
  passwordHash: string; // Store hashed password, not plaintext
  homeDir: string; // e.g., /home/alice
  groups: string[]; // e.g., ['users', 'admin']
  permissions: UserPermissions;
}

export interface UserPermissions {
  // Global user permissions (can be extended for per-file/dir ACLs)
  isAdmin?: boolean;
  quotaBytes?: number; // Optional storage quota
}

// Example User class (optional, for methods)
export class UserRecord implements User {
  id: string;
  username: string;
  passwordHash: string;
  homeDir: string;
  groups: string[];
  permissions: UserPermissions;

  constructor(init: Omit<User, 'id'> & { id?: string }) {
    this.id = init.id || crypto.randomUUID();
    this.username = init.username;
    this.passwordHash = init.passwordHash;
    this.homeDir = init.homeDir;
    this.groups = init.groups || [];
    this.permissions = init.permissions || {};
  }
}