import localforage from 'localforage';
import { File, FileRecord, FileMetadata, FileMetadataRecord, FilePermissions } from './file-metadata';

function fileKey(path: string) {
  return `file:${path}`;
}
function metaKey(path: string) {
  return `meta:${path}`;
}
function dirKey(path: string) {
  return path.endsWith('/') ? path : path + '/';
}

export class FSOps {
  protected initialized = false;

  async init(): Promise<void> {
    if (this.initialized) return;
    localforage.config({
      name: 'relotel-fs',
      storeName: 'files',
      description: 'Relotel virtual filesystem',
    });
    this.initialized = true;
  }

  async writeFile(
    pathOrFile: string | File,
    contentOrNothing?: string | Buffer,
    metadata?: Partial<Pick<FileMetadata, 'owner' | 'group' | 'permissions' | 'createdAt' | 'modifiedAt'>>
  ): Promise<void> {
    await this.init();
    let path: string;
    let content: string | Buffer;
    let meta: FileMetadata | undefined;
    if (typeof pathOrFile === 'string') {
      path = pathOrFile;
      content = contentOrNothing as string | Buffer;
      if (metadata) {
        meta = new FileMetadataRecord({
          path,
          type: 'file',
          owner: metadata.owner || 'root',
          group: metadata.group || 'users',
          permissions: metadata.permissions || {
            owner: { read: true, write: true, execute: false },
            group: { read: true, write: false, execute: false },
            other: { read: true, write: false, execute: false },
          },
          size: typeof content === 'string' ? content.length : (content as Buffer).length,
          createdAt: metadata.createdAt ?? Date.now(),
          modifiedAt: metadata.modifiedAt ?? Date.now(),
        });
      }
    } else {
      path = pathOrFile.metadata.path;
      content = pathOrFile.content;
      meta = pathOrFile.metadata;
    }
    await localforage.setItem(fileKey(path), content);
    if (meta) {
      await localforage.setItem(metaKey(path), meta);
    }
    // Simulate directory: add file to parent dir listing
    const parent = this.getParentDir(path);
    if (parent) {
      let dirList = (await localforage.getItem<string[]>(dirKey(parent))) || [];
      if (!dirList.includes(this.basename(path))) {
        dirList.push(this.basename(path));
        await localforage.setItem(dirKey(parent), dirList);
      }
    }
  }

  async readFile(path: string, encoding: BufferEncoding = 'utf8'): Promise<File> {
    await this.init();
    const content = await localforage.getItem<string | Buffer>(fileKey(path));
    const meta = await this.readMetadata(path);
    if (!meta) throw new Error('No metadata found for file: ' + path);
    return new FileRecord(content ?? '', meta);
  }

  async readMetadata(path: string): Promise<FileMetadata | null> {
    await this.init();
    const meta = await localforage.getItem<FileMetadata>(metaKey(path));
    return meta || null;
    }

  async readdir(path: string): Promise<string[]> {
    await this.init();
    const dirList = await localforage.getItem<string[]>(dirKey(path));
    return dirList || [];
  }

  async unlink(path: string): Promise<void> {
    await this.init();
    await localforage.removeItem(fileKey(path));
    await localforage.removeItem(metaKey(path));
    // Remove from parent dir
    const parent = this.getParentDir(path);
    if (parent) {
      let dirList = (await localforage.getItem<string[]>(dirKey(parent))) || [];
      dirList = dirList.filter(name => name !== this.basename(path));
      await localforage.setItem(dirKey(parent), dirList);
    }
  }

  async chown(path: string, owner: string, group?: string): Promise<void> {
    await this.init();
    const metaRaw = await this.readMetadata(path);
    if (!metaRaw) throw new Error('No metadata found for file: ' + path);
    const meta = new FileMetadataRecord({ ...metaRaw });
    meta.owner = owner;
    if (group) meta.group = group;
    await localforage.setItem(metaKey(path), meta);
  }

  async chmod(path: string, permissions: FilePermissions): Promise<void> {
    await this.init();
    const metaRaw = await this.readMetadata(path);
    if (!metaRaw) throw new Error('No metadata found for file: ' + path);
    const meta = new FileMetadataRecord({ ...metaRaw });
    meta.permissions = permissions;
    await localforage.setItem(metaKey(path), meta);
  }

  // Helpers
  private getParentDir(path: string): string | null {
    const idx = path.lastIndexOf('/');
    if (idx <= 0) return null;
    return path.slice(0, idx) || '/';
  }
  private basename(path: string): string {
    const idx = path.lastIndexOf('/');
    return idx === -1 ? path : path.slice(idx + 1);
  }
}

export const fsOps = new FSOps();
