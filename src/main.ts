import { configure, fs, InMemory } from '@zenfs/core';
import { promises as fsp } from '@zenfs/core';
import { FileRecord, FileMetadataRecord } from './file-metadata';
import { fsOps } from './fs-ops';

const output = document.getElementById('output')!;

function log(msg: string) {
  output.textContent += msg + '\n';
}

async function main() {
  try {
    await fsOps.init();
    const file = new FileRecord(
      'Hello ZenFS!',
      new FileMetadataRecord({
        path: '/hello.txt',
        type: 'file',
        owner: 'alice',
        group: 'users',
        permissions: {
          owner: { read: true, write: true, execute: false },
          group: { read: true, write: false, execute: false },
          other: { read: true, write: false, execute: false },
        },
        size: 12,
      })
    );
    await fsOps.writeFile(file);
    log('File written: /hello.txt');

    const readFile = await fsOps.readFile('/hello.txt');
    log('File content: ' + readFile.content);
    log('File metadata: ' + JSON.stringify(readFile.metadata));

    const files = await fsOps.readdir('/');
    log('Files in root: ' + files.join(', '));
  } catch (err: any) {
    log('Error: ' + err.message);
  }
}

main();

