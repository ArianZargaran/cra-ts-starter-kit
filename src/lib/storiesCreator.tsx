import React, { JSXElementConstructor, ReactNode } from "react";
import { storiesOf } from "@storybook/react";

interface storiesCreatorPropTypes {
  path?: string;
  Component: JSXElementConstructor<ReactNode>;
}

const storiesCreator = ({ path = "", Component }: storiesCreatorPropTypes) => {
  return storiesOf(path, module)
    .add("Light Mode", () => (
      <div className="light-mode-root">
        <Component />
      </div>
    ))
    .add("Dark Mode", () => (
      <div className="dark-mode-root">
        <Component />
      </div>
    ));
};

export { storiesCreator };
