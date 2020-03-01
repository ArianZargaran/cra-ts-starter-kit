import React, { Dispatch } from "react";
import { ThemeEnum } from "enums/ThemeEnum";
import { ThemeActionTypes } from "theme/state/action-creators";

interface ThemeContextTypes {
  theme: ThemeEnum;
  dispatch: Dispatch<ThemeActionTypes>;
}

const ThemeContext = React.createContext({} as ThemeContextTypes);

export { ThemeContext };
