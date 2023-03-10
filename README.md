[![npm (scoped)](https://img.shields.io/npm/v/@lifaon/math.svg)](https://www.npmjs.com/package/@lifaon/math)
![npm](https://img.shields.io/npm/dm/@lifaon/math.svg)
![NPM](https://img.shields.io/npm/l/@lifaon/math.svg)
![npm type definitions](https://img.shields.io/npm/types/@lifaon/math.svg)

## math


## 📦 Installation

```bash
yarn add @lifaon/math
# or
npm install @lifaon/math --save
```

This library supports:

- **common-js** (require): transpiled as es2015, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll probably need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@lifaon/math](https://cdn.skypack.dev/@lifaon/math)
