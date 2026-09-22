# NgxSemanticDocs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Requirements

Use **Node.js 22** or later (`engines.node` is `>=22`; CI reads [`.nvmrc`](.nvmrc)). Install with `npm ci` so the lockfile is respected.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## CI / CD

GitHub Actions is the only pipeline. Pull requests to `master` run a production build. Pushes to `master` (and manual **Run workflow** on that branch) deploy `dist/browser` to [ngx-semantic/ngx-semantic.github.io](https://github.com/ngx-semantic/ngx-semantic.github.io) for GitHub Pages.

The deploy job needs repository secret **`GH_IO_ACCESS_TOKEN`**: a token with write access to `ngx-semantic/ngx-semantic.github.io`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
