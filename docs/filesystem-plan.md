# Filesystem Architecture Plan

## Goals
- Provide a unified, browser-compatible filesystem API for the app
- Support both in-memory and persistent storage (IndexedDB, WebStorage, etc.)
- Expose a simple, promise-based API for file and directory operations

## Features
- Read, write, delete files
- List directory contents
- Support for multiple backends (InMemory, IndexedDB, WebStorage, etc.)
- Initialization/configuration logic for backend selection
- Error handling and reporting
- (Optional) File metadata/stat support
- (Optional) Directory creation/removal

## Backend Options
- **InMemory**: Fast, non-persistent, good for testing and temporary data
- **IndexedDB**: Persistent, recommended for production browser storage
- **WebStorage**: Uses localStorage/sessionStorage, limited size, easy to use
- (Optional) **Zip/Iso**: Read-only archive support
- (Optional) **Emscripten**: For WASM/emscripten integration

## API Design
- Singleton or class-based interface (e.g., `fsOps`)
- Promise-based methods: `writeFile`, `readFile`, `readdir`, `unlink`, etc.
- Initialization method to configure backend
- (Optional) Support for mounting multiple backends at different paths
- (Optional) Event/callback system for file changes

## Example Usage
```ts
await fsOps.init({ backend: 'IndexedDB' });
await fsOps.writeFile('/foo.txt', 'bar');
const content = await fsOps.readFile('/foo.txt');
const files = await fsOps.readdir('/');
await fsOps.unlink('/foo.txt');
```

## User System (Planned)
### Goals
- Support multiple users on the same virtual machine
- Each user has their own home directory and file permissions
- Allow user switching and authentication

### Features
- User creation, deletion, and authentication (username/password or similar)
- Per-user home directories (e.g., `/home/alice`, `/home/bob`)
- File and directory permissions (read, write, execute) per user
- User groups (optional, for shared permissions)
- Superuser/admin support (optional)
- API for user management (create, delete, authenticate, list users)
- (Optional) User quotas (limit storage per user)

### Open Questions
- How to store user data securely (in-memory, persistent, encrypted)?
- What permission model to use (Unix-like, ACLs, custom)?
- How to handle user switching in the API?
- Should users be able to share files or directories?
- How to handle guest/anonymous users?

## Open Questions
- Should we expose advanced features (stats, streams, etc.)?
- How should backend selection/configuration be exposed to the user?
- Do we need migration or sync between backends?
- Should we support mounting multiple backends at once?

---

_This document is a living plan. Update as the filesystem design evolves._ 