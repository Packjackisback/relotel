import type { User } from '../users/user';

export type FileType = 'file' | 'directory';

export interface FileMetadata {
  path: string;
  type: FileType;
  owner: string; // user id
  group: string; // primary group
  permissions: FilePermissions;
  size: number;
  createdAt: number; // timestamp (ms)
  modifiedAt: number; // timestamp (ms)
  // (Optional) extended attributes, symlink target, etc.
}

export interface FilePermissions {
  // Unix-like rwx for owner/group/other
  owner: PermissionBits;
  group: PermissionBits;
  other: PermissionBits;
}

export type PermissionBits = {
  read: boolean;
  write: boolean;
  execute: boolean;
};

export class FileMetadataRecord implements FileMetadata {
  path: string;
  type: FileType;
  owner: string;
  group: string;
  permissions: FilePermissions;
  size: number;
  createdAt: number;
  modifiedAt: number;

  constructor(init: Omit<FileMetadata, 'createdAt' | 'modifiedAt'> & { createdAt?: number; modifiedAt?: number }) {
    this.path = init.path;
    this.type = init.type;
    this.owner = init.owner;
    this.group = init.group;
    this.permissions = init.permissions;
    this.size = init.size;
    const now = Date.now();
    this.createdAt = init.createdAt ?? now;
    this.modifiedAt = init.modifiedAt ?? now;
  }
}

// New: File type that combines content and metadata
export interface File {
  content: string | Buffer;
  metadata: FileMetadata;
}

export class FileRecord implements File {
  content: string | Buffer;
  metadata: FileMetadata;
  constructor(content: string | Buffer, metadata: FileMetadata) {
    this.content = content;
    this.metadata = metadata;
  }
} 