import React from "react";

import "./app.css";

const App = ({ copy = "" }: { copy: string }) => {
  return (
    <div className="wtf-app">
      <header className="wtf-header">
        <p>{copy}</p>
      </header>
    </div>
  );
};

export { App };
