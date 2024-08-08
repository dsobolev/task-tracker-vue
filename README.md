# task-tracker

Trello-alike, very simple task tracker.

The goal is to have template project to then re-do it in other frameworks (React, Angular), for studying purposes.

Techs used are [Vue.js](https://vuejs.org/) and [TypeScript](https://www.typescriptlang.org/), with bare [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for API calls.

Dev sever is [Vite](https://vitejs.dev/)

For now the app consumes API provided by [Task Tracker API (Symfony)](https://github.com/dsobolev/task-tracker-api-sf) project.

Further notes are from auto-generated README, kept for reference.
 
### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

I'm using [SublimeText](https://www.sublimetext.com/) here. Might be not the best DI, but I like it.

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
yarn build
yarn test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
