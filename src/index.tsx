import React from "react";
import ReactDOM from "react-dom";
import { App } from "components/App/App";
import * as serviceWorker from "serviceWorker";
import { Provider as GlobalStateProvider } from "react-redux";
import { store } from "state/store";

import "styles/reset.css";
import "styles/index.css";

import { bootstrapActions } from "state/bootstrapActions";
import { ThemeProvider } from "theme/provider";

bootstrapActions(store);

ReactDOM.render(
  <GlobalStateProvider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </GlobalStateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
