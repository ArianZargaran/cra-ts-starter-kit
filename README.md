# CRA TS Starter Kit

_Stack: React, Redux, TypeScript, EsLint, Prettier, Jest_

## How to use:

<u>Installation</u>

```sh
$ yarn
```

<u>Launch App Locally</u>

```
$ yarn start
```

<u>Deployed App Version</u>

Visit ``.

## File Structure

## Compoents Tree

## Global State

## Code Base: Major Decisions

### Styles

<u>Raw CSS</u>. The current configuration already allows us to use CSS pre-processors. BUT, we are not going to make use of any magic tool for CSS. `"WHAT? WHY?", - you may ask.`:

- Firstly, because I believe in plain CSS. It's strong enough.
- Second, still didn't find a legitimate excuse to adopt such complexity. CSS Variables? The language already have them. Expressions? I doubt that we will ever need them.

<u>Eric Meyer's reset.css</u>. Eric Meyer's // TODO - EXPLAIN WHY AND WHERE IS IT

<u>Design System Decisions under index.css</u>. Design System Decisions // TODO - EXPLAIN WHY AND WHERE IS IT

<u>Modular CSS</u>. Modular CSS makes just sense, specially with all the benefits of React Components.

<u>BEM Naming Convention</u>. For this project I decided to apply BEM naming convention \*2 // TODO - EXPLAIN WHY

> BEM + Modular CSS + React Components = SUCCESS.

### Functionality

<u>Naming and Absolute imports</u>.

### Layout

<u>Import</u>:

## Config

### TSConfig

<u>Absolute imports from `/src`</u>. According to what we've seen on the File Structure section, `src` is kind of our play field, where logic happens. Such reason makes me think `/src` is a nice root folder:

```
  "compilerOptions": {
    "baseUrl": "src",
  }
```

### IDE: Visual Studio Code

I personally like VS Code IDE for its multiple solutions. If you are interested on what rules were applied on this particular project, please check [VS Config](./docs/config/vs-code.md).
