import React from "react";
import { storiesOf } from "@storybook/react";
import { App } from "components/App/App";
import { ThemeProvider } from "theme/state/provider";

const AppComponent = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

storiesOf("App/Master", module)
  .add("On Light Mode", () => (
    <div className="light-mode-root">
      {AppComponent()}
    </div>
  ))
  .add("On Dark Mode", () => (
    <div className="dark-mode-root">
      {AppComponent()}
    </div>
  ));
