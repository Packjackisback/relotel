import localforage from 'localforage';
import { UserRecord } from './user';

const KEY_PREFIX = 'user:';

export const UserService = {
  async saveUser(user: UserRecord): Promise<void> {
    await localforage.setItem(KEY_PREFIX + user.username, user);
  },

  async getUser(username: string): Promise<UserRecord | null> {
    const data = await localforage.getItem<UserRecord>(KEY_PREFIX + username);
    return (data as UserRecord) || null;
  },

  async authenticate(username: string, passwordHash: string): Promise<boolean> {
    const user = await this.getUser(username);
    if (!user) return false;
    return user.passwordHash === passwordHash;
  },
}; 