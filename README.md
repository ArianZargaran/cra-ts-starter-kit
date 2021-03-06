[![Build Status](https://travis-ci.org/ArianZargaran/cra-ts-starter-kit.svg?branch=master)](https://travis-ci.org/ArianZargaran/cra-ts-starter-kit)
[![Coverage Status](https://coveralls.io/repos/github/ArianZargaran/cra-ts-starter-kit/badge.svg?branch=master)](https://coveralls.io/github/ArianZargaran/cra-ts-starter-kit?branch=master)

# CRA TS Starter Kit

_Stack: React, Redux, Firebase TypeScript, Storybook, EsLint, Prettier, Jest, Enzyme_

## How to use:

<u>Installation</u>

```sh
# via npm
$ npm install

# via yarn
$ yarn
```

<u>Launch App Locally</u>

```sh
# via npm
$ npm start

# via yarn
$ yarn start
```

<u>Deployed App Version</u>

Visit `wtf.com`.

## About this Documentation

Three level documentation:

- `In-code Level Documentation`. Series of comments all along the codebase. The goal of `In-code Documentation` is to register:

  - What a function do
  - What the function's parameters or arguments are
  - What a function returns

  > **NOTE**: It's useless to document absolutely everything around the code. But we all know when you are making those kind of easy-to-forget/hard-to-understand decisions. So, these are the ones that MUST to be documented.

- `Components Level Documentation`. Component documentation handled with Storybook Documentation. Component-Driven Development is the way to build UIs from the bottom up starting with components and ending at screens. The good thing is with Storybook we can auto-generate a maintainable solid documentation. Here's what we are covering:

  - Design System decisions
  - Component's usage
  - Each component's description, primary story sample (with copyable source), props table, and collection of stories.
    > Visit `wtf.com` for life Design System Docs.

- `Project's Level Documentation`. Includes this same README file, which contains:
  - A brief description of the project
  - Installation instructions
  - Record all major decisions made
  - Conventions applied if that's the case: naming, file organization, coding practices, etc.

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

### Tests

**Unit Tests:** _Jest & Enzyme_

**Coverage:** _Coveralls_

> NOTE: Do you want to run your brand new Coveralls script? Follow the steps

- Add a `.coveralls.yml` file at the root level of the repository.

- Paste the following code snippet:

```.coveralls.yml

repo_token: YOUR_COVERALLS_REPO_TOKEN

```

- Replace `YOUR_COVERALLS_REPO_TOKEN` with your corresponding one.

- Check the script works by runing: `$ yarn run coverage`

**Functional Tests:** _Cypress & Cucumber_

```
Feature: A short description of the desired functionality
  Scenario: A business situation
    Given a precondition
    And another precondition
    When an event happens
    And another event happens too
    Then a testable outcome is achieved
    And something else is also completed
```

**Visual Tests:** _Storybook & Loki_

## Continuous Integration & Continuous Delivery

## Back-End Solution

_Firebase_

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
