# Package Format Guide

This project treats **apps** and **window-managers** as pluggable _packages_ that live inside the virtual filesystem.  A package is just a directory with a `manifest.json` file and a JavaScript bundle (usually `main.js`).  At runtime the loader reads the manifest, fetches the JS file, and `import()`s it in the browser.

The same layout works whether the package ships with the code-base (compiled during bootstrap) or is installed later by writing files through `fsOps`.

---

## 1. Directory layout

```
/apps/                    ⟵ all apps live here
  └─ <app-id>/            ⟵ directory name **must** equal the package id
       ├─ manifest.json
       └─ main.js         ⟵ UMD / ESM bundle that exports the React component

/system/window-manager/   ⟵ all window-managers live here
  └─ <wm-id>/
       ├─ manifest.json
       └─ main.js
```

> **Tip**  Built-in TSX files under `src/apps` and `src/desktop/*WindowManager.tsx` are automatically compiled and copied to the locations above by the bootstrap scripts.  You only need to follow the format below when you are adding a package at _runtime_ or from outside the source tree.

---

## 2. `manifest.json` schema

| Field            | Required | Description                                                                |
|------------------|----------|----------------------------------------------------------------------------|
| `id`             | ✅       | Unique slug for the package (also the directory name).                     |
| `name`           | ✅       | Human-readable name shown in menus.                                        |
| `icon`           | ❌       | Emoji or small string displayed in the UI.                                |
| `entry`          | ✅       | Path to the JS bundle **inside the same directory** (e.g. `"main.js"`).   |
| `type`           | ❌ _(apps only)_ | The string `"app"`. Helps differentiating package kinds.          |
| `singleInstance` | ❌ _(apps only)_ | `true` = only one window allowed, `false`/omitted = many.      |

### Example – App
```json
{
  "id": "paint",
  "name": "MS Paint 95",
  "icon": "🖌️",
  "entry": "main.js",
  "type": "app",
  "singleInstance": false
}
```

### Example – Window Manager
```json
{
  "id": "floating",
  "name": "Floating Window Manager",
  "icon": "🪟",
  "entry": "main.js"
}
```

---

## 3. JavaScript bundle requirements (`main.js`)

1. Must be *self-contained* – no external imports except the globals supplied by the loader:
   * `react`, `react/jsx-runtime`, `react/jsx-dev-runtime` → global `React`
   * `react95` → global `React95`
   * `@dnd-kit/*` (window managers) → exposed via `window.DndKit*`
2. Must attach the component to `module.exports` / `exports.default` **or** use `export default`.
3. For apps, expect to receive the props defined in `src/desktop/types.ts → AppWindowProps`.
4. For window managers, expect `WindowManagerProps` from the same file.

The bootstrap scripts use **Babel** + the `transform-modules-umd` plugin to turn TSX source into such a bundle automatically.

---

## 4. Creating a package during development

When working *inside* the repo you don't need to craft `manifest.json` or JS bundles by hand – just add a TSX file:

```
src/apps/MyCoolApp.tsx                  // must export `appInfo` + default component
src/desktop/MyLayoutWindowManager.tsx   // must export `wmInfo` + default component
```

Run `pnpm dev` and the bootstrapper will:
1. Compile the file to UMD JS.
2. Write the bundle + manifest into the virtual filesystem at the correct path.
3. Update the registry so it appears in the OS immediately.

---

## 5. Installing a package at runtime

If you fetch a package from the network you can store it with `fsOps`:

```ts
await fsOps.mkdir('/apps/notes');
await fsOps.writeFile('/apps/notes/manifest.json', JSON.stringify(manifest));
await fsOps.writeFile('/apps/notes/main.js', jsBundleString);
```

The next time the desktop refreshes the new app will appear in the Start menu.

---

_Questions / improvements?  Update this doc so everyone stays in sync!_ 