import { FileRecord, FileMetadataRecord } from './files/file-metadata';
import { fsOps } from './files/fs-ops';

import { shell } from './shell/shell';

const output = document.getElementById('output')!;

function log(msg: string) {
  output.textContent += msg + '\n';
}

async function main() {
  try {
    const file = new FileRecord(
      'Hello Filer!',
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

