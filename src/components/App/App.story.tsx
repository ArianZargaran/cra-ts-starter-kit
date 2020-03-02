import React from "react";
import { storiesOf } from "@storybook/react";
import { App } from "components/App/App";
import { ThemeProvider } from "theme/state/provider";

storiesOf("App", module)
  .add("base", () => (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  ));
