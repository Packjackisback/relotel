import { fsOps } from './files/fs-ops';
import { FileRecord, FileMetadataRecord } from './files/file-metadata';
import { UserRecord } from './users/user';
import { UserService } from './users/user-service';

export async function bootstrapUserspace({ username, passwordHash }: { username: string; passwordHash: string }) {
  try {
    await fsOps.readdir('/home');
  } catch {
    await fsOps.writeFile(
      new FileRecord('', new FileMetadataRecord({
        path: '/home',
        type: 'directory',
        owner: 'root',
        group: 'users',
        permissions: {
          owner: { read: true, write: true, execute: true },
          group: { read: true, write: true, execute: true },
          other: { read: true, write: false, execute: true },
        },
        size: 0,
      }))
    );
  }

  // Create root user
  const rootUser = new UserRecord({
    username: 'root',
    passwordHash: '',
    homeDir: '/root',
    groups: ['root', 'users'],
    permissions: { isAdmin: true },
  });

  // Create the user from input
  const user = new UserRecord({
    username,
    passwordHash,
    homeDir: `/home/${username}`,
    groups: ['users'],
    permissions: {},
  });

  // Create /home/username directory if it doesn't exist
  try {
    await fsOps.readdir(`/home/${username}`);
  } catch {
    await fsOps.writeFile(
      new FileRecord('', new FileMetadataRecord({
        path: `/home/${username}`,
        type: 'directory',
        owner: username,
        group: 'users',
        permissions: {
          owner: { read: true, write: true, execute: true },
          group: { read: true, write: false, execute: true },
          other: { read: true, write: false, execute: true },
        },
        size: 0,
      }))
    );
  }

  // Write a welcome file in the user's home
  await fsOps.writeFile(
    new FileRecord(
      `Welcome to your WebOS, ${username}!`,
      new FileMetadataRecord({
        path: `/home/${username}/welcome.txt`,
        type: 'file',
        owner: username,
        group: 'users',
        permissions: {
          owner: { read: true, write: true, execute: false },
          group: { read: true, write: false, execute: false },
          other: { read: true, write: false, execute: false },
        },
        size: 26 + username.length,
      })
    )
  );

  // Persist users
  await UserService.saveUser(rootUser);
  await UserService.saveUser(user);

  return { rootUser, user };
} 