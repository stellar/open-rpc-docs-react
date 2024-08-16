# @stellar/open-rpc-docs-react

OpenRPC documentation as a react component.

This Stellar-specific package was forked from [@metamask/open-rpc-docs-react](https://www.npmjs.com/package/@metamask/open-rpc-docs-react)

## What is this?

This is a react component that will render documentation for a given OpenRPC document.

## How do I use this?

### Installation

```bash
npm install --save @stellar/open-rpc-docs-react
```

### Usage

```js
import Method from '@stellar/open-rpc-docs-react';
```

and then use it somewhere in a project:

```js
<Method method={method} />
```

## Development

### Linking

When linking this project with others, use `yarn link:setup` to avoid getting errors about hooks / multiple react versions.
