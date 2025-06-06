[![npm (scoped)](https://img.shields.io/npm/v/@xstd/abortable.svg)](https://www.npmjs.com/package/@xstd/abortable)
![npm](https://img.shields.io/npm/dm/@xstd/abortable.svg)
![NPM](https://img.shields.io/npm/l/@xstd/abortable.svg)
![npm type definitions](https://img.shields.io/npm/types/@xstd/abortable.svg)

<picture>
  <source height="64" media="(prefers-color-scheme: dark)" srcset="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-dark.png?raw=true">
  <source height="64" media="(prefers-color-scheme: light)" srcset="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
  <img height="64" alt="Shows a black logo in light color mode and a white one in dark color mode." src="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
</picture>

## @xstd/abortable

Abortable type

## 📦 Installation

```shell
yarn add @xstd/abortable
# or
npm install @xstd/abortable --save
```

## 📜 Documentation

```ts
interface Abortable {
  readonly signal?: AbortSignal;
}
```

