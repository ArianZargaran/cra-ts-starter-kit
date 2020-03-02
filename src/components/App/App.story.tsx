import React from "react";
import { App } from "components/App/App";
import { MockStore } from "lib/MockStore";
import { storiesCreator } from "lib/storiesCreator";

const AppComponent = () => {
  return (
    <MockStore>
      <App />
    </MockStore>
  );
};

storiesCreator({ path: "App/Master", component: <AppComponent /> });
