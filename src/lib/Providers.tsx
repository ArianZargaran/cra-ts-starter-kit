import React, { ReactNode } from "react";
import { ThemeProvider } from "theme/state/provider";
import { Provider } from "react-redux";
import { Theme } from "theme/component/Theme";
import { Store } from "redux";

interface ProvidersPropTypes {
  children: ReactNode;
  store: Store;
}

const Providers = ({ children, store }: ProvidersPropTypes) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Theme>{children}</Theme>
      </ThemeProvider>
    </Provider>
  );
};

export { Providers };
