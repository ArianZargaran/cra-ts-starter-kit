// TODO: Remove Knobs or actions
// TODO: Remember to check Viewports
import React from "react";
import { App } from "components/App/App";
import { MockStore } from "lib/MockStore";
import { storiesCreator } from "lib/storiesCreator";
import { text } from "@storybook/addon-knobs";

const AppComponent = () => {
  const children = text("children", "Hello world!");

  return (
    <MockStore>
      <App>{children}</App>
    </MockStore>
  );
};

storiesCreator({ path: "App/Master", Component: AppComponent });
