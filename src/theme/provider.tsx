import React, { ReactNode, useReducer, Reducer } from "react";
import { themeInitialState } from "./initial-state";
import { ThemeContext } from "./context";
import { themeReducer } from "./reducer";
import { ThemeEnum } from "theme/ThemeEnum";
import { ThemeActionTypes } from "./action-creators";

interface ThemeProviderPropTypes {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderPropTypes) => {
  const [theme, dispatch] = useReducer<Reducer<ThemeEnum, ThemeActionTypes>>(
    themeReducer,
    themeInitialState
  );

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
