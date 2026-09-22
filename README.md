# Ngx Semantic Docs

Documentation site for [ngx-semantic](https://github.com/ngx-semantic/ngx-semantic), built with Angular 21.

## Requirements

Use **Node.js 22** or later (`engines.node` is `>=22`; CI reads [`.nvmrc`](.nvmrc)). Install with `npm ci` so the lockfile is respected.

## Development server

Run `npm start` (or `ng serve --hmr`) and open `http://localhost:4200/`. The app reloads when source files change.

## Build

Run `npm run build` to produce a production build under `dist/browser/`. GitHub Pages is served from that output.

## CI / CD

GitHub Actions is the only pipeline. Pull requests to `master` run a production build. Pushes to `master` (and manual **Run workflow** on that branch) deploy `dist/browser` to [ngx-semantic/ngx-semantic.github.io](https://github.com/ngx-semantic/ngx-semantic.github.io) for GitHub Pages.

The deploy job needs repository secret **`GH_IO_ACCESS_TOKEN`**: a token with write access to `ngx-semantic/ngx-semantic.github.io`.

## Further help

Use `ng help` or see the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
