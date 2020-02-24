import React, { Dispatch } from "react";
import { ThemeEnum } from "theme/ThemeEnum";
import { ThemeActionTypes } from "theme/action-creators";

 interface ThemeContextTypes {
  theme: ThemeEnum;
  dispatch: Dispatch<ThemeActionTypes>
}

const ThemeContext = React.createContext({} as ThemeContextTypes);

export { ThemeContext };
