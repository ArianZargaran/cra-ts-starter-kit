import React from "react";
import { Theme } from "theme/component/Theme";

import "./app.css";

const App = () => {
  return (
    <Theme>
      <div className="wtf-app">
        <header className="wtf-header">
          <p>Hello World!</p>
        </header>
      </div>
    </Theme>
  );
};

export { App };
