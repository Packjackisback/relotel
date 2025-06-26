# Developing Apps for Relotel


## Developing Apps

The layout for a Relotel app is extremely simple: 

```
<folder>
       ├─manifest.json
       └─main.<tsx | jsx | ts | js>
```
the included file here can actually be whatever entrypoint is declared in the manifest.json, and because of how it is parsed it should be compatible with tsx (typescript react), jsx (react), ts (typescript), and js (javascript).

Unfortunately, the way that this is loaded from the virtual filesystem means that inputs must be manually added to the global state, and wrapped manually. To make it easier for writing with modern IDEs I've set it up to automatically wrap imports, so the table of allowed imports are below:
```
import * from 'react';
import fsOps from '../../src/files/fs-ops';
import * from '@dnd-kit/core';
import * from '@dnd-kit/sortable';
import * from '@dnd-kit/utilities
import appRegistry from './desktop/appRegistry';
import WindowManagerContext from './desktop/WindowManagerContext';
import UserService from './users/user-service';
import installAppFromUserUpload, installAppFromDirectory from './apps/app_installation';
```
Alternatively, you can use the following below, but this may suffer from more breaking changes than the above method, which I am commited to keeping legacy support for.
```
React
React95
window.fsOps
window.installAppFromUserUpload
window.installAppFromDirectory
```

Currently a better system is planned, but it will be a little bit until I am on something of that priority.

A sample app will be created very soon /TODO


## Uploading Apps

Relotel stores apps, window managers, and (eventually) bars and widgets in the virtual filesystem. While you can test single file applications by downloading the source and putting apps in default/apps/ in the actual source code, it's a lot easy to use the package installation default app and upload a folder containing the application. As a reminder this means a manifest.json with the proper fields, and the rest of the code in the same directory.