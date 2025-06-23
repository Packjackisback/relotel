import { configure, fs, InMemory } from '@zenfs/core';
import { promises as fsp } from '@zenfs/core';
import { File, FileRecord, FileMetadata, FileMetadataRecord, FilePermissions } from './file-metadata';

function getMetaPath(path: string) {
  return `/meta${path}.json`;
}

export class FSOps {
  protected initialized = false;

  async init(): Promise<void> {
    if (this.initialized) return;
    await configure({ mounts: { '/': InMemory } });
    // Ensure /meta directory exists
    try {
      await fsp.mkdir('/meta');
    } catch (e: any) {
      if (e.code !== 'EEXIST') throw e;
    }
    this.initialized = true;
  }

  /**
   * Write a file, with content and metadata, or a File object
   */
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
      // Save metadata if provided
      if (metadata) {
        await fsp.writeFile(path, content);
        const stat = await fsp.stat(path);
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
          size: stat.size,
          createdAt: metadata.createdAt ?? Date.now(),
          modifiedAt: metadata.modifiedAt ?? Date.now(),
        });
        await fsp.writeFile(getMetaPath(path), JSON.stringify(meta));
      } else {
        await fsp.writeFile(path, content);
      }
    } else {
      // File object
      path = pathOrFile.metadata.path;
      content = pathOrFile.content;
      meta = pathOrFile.metadata;
      await fsp.writeFile(path, content);
      await fsp.writeFile(getMetaPath(path), JSON.stringify(meta));
    }
  }

  /**
   * Read a file and its metadata as a File object
   */
  async readFile(path: string, encoding: BufferEncoding = 'utf8'): Promise<File> {
    await this.init();
    const content = await fsp.readFile(path, { encoding });
    const meta = await this.readMetadata(path);
    if (!meta) throw new Error('No metadata found for file: ' + path);
    return new FileRecord(content, meta);
  }

  /**
   * Read file metadata
   */
  async readMetadata(path: string): Promise<FileMetadata | null> {
    await this.init();
    try {
      const metaRaw = await fsp.readFile(getMetaPath(path), { encoding: 'utf8' });
      return JSON.parse(metaRaw) as FileMetadata;
    } catch (e: any) {
      return null;
    }
  }

  /**
   * List files in a directory
   */
  async readdir(path: string): Promise<string[]> {
    await this.init();
    return fsp.readdir(path);
  }

  /**
   * Delete a file and its metadata
   */
  async unlink(path: string): Promise<void> {
    await this.init();
    await fsp.unlink(path);
    try {
      await fsp.unlink(getMetaPath(path));
    } catch {}
  }

  /**
   * Change file owner and/or group
   */
  async chown(path: string, owner: string, group?: string): Promise<void> {
    await this.init();
    const metaRaw = await this.readMetadata(path);
    if (!metaRaw) throw new Error('No metadata found for file: ' + path);
    const meta = new FileMetadataRecord({ ...metaRaw });
    meta.owner = owner;
    if (group) meta.group = group;
    await fsp.writeFile(getMetaPath(path), JSON.stringify(meta));
  }

  /**
   * Change file permissions
   */
  async chmod(path: string, permissions: FilePermissions): Promise<void> {
    await this.init();
    const metaRaw = await this.readMetadata(path);
    if (!metaRaw) throw new Error('No metadata found for file: ' + path);
    const meta = new FileMetadataRecord({ ...metaRaw });
    meta.permissions = permissions;
    await fsp.writeFile(getMetaPath(path), JSON.stringify(meta));
  }
}

export const fsOps = new FSOps();
