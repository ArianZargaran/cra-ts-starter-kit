import React from "react";

import "./app.css";

interface AppPropTypes {
  children?: string;
}

const App = ({ children = "Hello world!" }: AppPropTypes) => {
  return (
    <div className="wtf-app">
      <header className="wtf-header">
        <p>{children}</p>
      </header>
    </div>
  );
};

export { App };
