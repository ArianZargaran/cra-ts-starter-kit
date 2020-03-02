import React, { ReactNode } from "react";
import { storiesOf } from "@storybook/react";

interface storiesCreatorPropTypes {
  path?: string;
  component: ReactNode;
}

const storiesCreator = ({ path = "", component }: storiesCreatorPropTypes) => {
  return storiesOf(path, module)
    .add("Light Mode", () => <div className="light-mode-root">{component}</div>)
    .add("Dark Mode", () => <div className="dark-mode-root">{component}</div>);
};

export { storiesCreator };
