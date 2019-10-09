# @jam3/react-hooks

> Repository for public react hooks

[![NPM](https://img.shields.io/npm/v/@jam3/react-hooks.svg)](https://www.npmjs.com/package/@jam3/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Hooks List

- `use-intersection-observer`: Observes a DOM Element
- `use-mouse-position`: Mouse Position [ {x , y} ]
- `use-on-hover`: Detects hover events and accepts two callbacks for in & out
- `use-scroll-direction`: Scroll direction [top | up | down]
- `use-scroll-progress`: Scroll Progress [0-100]
- `use-scroll-to-top`: Scrolls To Top [fn]
- `use-window-size`: Window Size [ {innerHeight , innerWidth} ]

## Install

[![NPM](https://nodei.co/npm/@jam3/react-hooks.png)](https://nodei.co/npm/@jam3/react-hooks/)

```bash
npm install @jam3/react-hooks
yarn add @jam3/react-hooks
```

## Usage

Sample Usage for one of the hooks

```jsx
import React from "react";
import { useMousePosition } from "@jam3/react-hooks";

const Component = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      Mouse position x: {x}
      <br />
      Mouse position y: {y}
    </div>
  );
};
```

For more information, please refer to [Usage](https://jam3-react-hooks.netlify.com) in our documentation.

## Release

Steps:

1. `git checkout master; git pull origin master`
2. Document the changelog and bump the package.json version
3. `npm run build`
4. `npm publish`

By pushing `master`, Netlify will run `npm run deploy` and it will re-deply the docs [here](https://jam3-react-hooks.netlify.com)

## Contributing

Please make sure to read the [contributing guide](CONTRIBUTING.md) before making a pull request.

## Changelog

Detailed changes for each release are documented in the [release notes](CHANGELOG.md).

# What next

- Automate new hooks creation and publishing
- Improve docs and examples
- Typescript support
- SSR Support
- Conventional Commit Specifications

## License

MIT © [Jam3](https://github.com/Jam3)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
