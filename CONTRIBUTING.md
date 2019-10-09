# Contributing to this library

Are you thinking about getting involved with the library? Great!, there are a few things you need to know.

## Code of Conduct

We have adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Branching

Just create a branch depending on the action

- Create a new hook - `hook/use-new-hook`
- Improve current hook - `fix/hook-to-be-fixed`

You can also log issues [here](https://github.com/Jam3/react-hooks/issues)

## Repo Structure

This repo contains 3 important parts:

### NPM Hooks

- Root folder which has a rollup config to package the library for npm

`npm run install`: Install dependencies and build the dist folder
`npm run start`: Watch changes and rebuild dist
`npm run build`: Re-build `dist` folder

### Docs

- `docs` folder - builds the docs hosted [here](https://jam3-react-hooks.netlify.com)

- `npm run install`: Install dependencies
- `npm run start`: Open your docs in the browser

### Playground

- `playground` folder - Create React App with `gsap` and `sass` already installed to play around with your new hook :), you could use the `docs` too if you prefer

- `npm run install`: Install dependencies
- `npm run start`: Open your create-react-app on the browser
