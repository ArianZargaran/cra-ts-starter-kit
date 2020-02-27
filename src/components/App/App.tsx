import React from "react";
import { Theme } from "components/Theme/Theme";

import "./app.css";

export const App = () => {
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

export default App;
