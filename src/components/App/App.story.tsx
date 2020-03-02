import React from "react";
import { storiesOf } from "@storybook/react";
import { App } from "components/App/App";
import { ThemeProvider } from "theme/state/provider";
import { text } from "@storybook/addon-knobs";

const AppComponent = ({ copy }: { copy: string }) => {
  return (
    <ThemeProvider>
      <App copy={copy} />
    </ThemeProvider>
  );
};

storiesOf("App/Master", module)
  .add("On Light Mode", () => (
    <div className="light-mode-root">
      {AppComponent({ copy: text("copy", "abcde") })}
    </div>
  ))
  .add("On Dark Mode", () => (
    <div className="dark-mode-root">
      {AppComponent({ copy: text("copy", "12345") })}
    </div>
  ));
