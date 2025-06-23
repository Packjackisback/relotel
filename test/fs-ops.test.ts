import { describe, it, expect, beforeEach } from 'vitest';
import { fsOps } from '../src/files/fs-ops';
import { FileRecord, FileMetadataRecord } from '../src/files/file-metadata';

describe('FSOps', () => {
  beforeEach(async () => {
    // Start clean
    await fsOps.init();
  });

  it('should write and read a file with metadata', async () => {
    const file = new FileRecord(
      'hello',
      new FileMetadataRecord({
        path: '/test.txt',
        type: 'file',
        owner: 'alice',
        group: 'users',
        permissions: {
          owner: { read: true, write: true, execute: false },
          group: { read: true, write: false, execute: false },
          other: { read: true, write: false, execute: false },
        },
        size: 5,
      })
    );
    await fsOps.writeFile(file);
    const readFile = await fsOps.readFile('/test.txt');
    expect(readFile.content).toBe('hello');
    expect(readFile.metadata.owner).toBe('alice');
    expect(readFile.metadata.size).toBe(5);
  });

  it('should list files in a directory', async () => {
    const file = new FileRecord(
      'bar',
      new FileMetadataRecord({
        path: '/foo.txt',
        type: 'file',
        owner: 'bob',
        group: 'users',
        permissions: {
          owner: { read: true, write: true, execute: false },
          group: { read: true, write: false, execute: false },
          other: { read: true, write: false, execute: false },
        },
        size: 3,
      })
    );
    await fsOps.writeFile(file);
    const files = await fsOps.readdir('/');
    expect(files).toContain('foo.txt');
  });

  it('should delete a file and its metadata', async () => {
    const file = new FileRecord(
      'bye',
      new FileMetadataRecord({
        path: '/delete.txt',
        type: 'file',
        owner: 'carol',
        group: 'users',
        permissions: {
          owner: { read: true, write: true, execute: false },
          group: { read: true, write: false, execute: false },
          other: { read: true, write: false, execute: false },
        },
        size: 3,
      })
    );
    await fsOps.writeFile(file);
    await fsOps.unlink('/delete.txt');
    await expect(fsOps.readFile('/delete.txt')).rejects.toBeTruthy();
  });
}); 