import { ThemeEnum } from "enums/ThemeEnum";

export enum THEME_ACTIONS_TYPES {
  TOGGLE_THEME = "TOGGLE_THEME",
  SET_DARK_THEME = "SET_DARK_THEME"
}

export interface ThemeActionTypes {
  type: THEME_ACTIONS_TYPES;
  payload?: ThemeEnum;
}

export const toggleTheme = (): ThemeActionTypes => ({
  type: THEME_ACTIONS_TYPES.TOGGLE_THEME
});

export const setDarkTheme = (): ThemeActionTypes => ({
  type: THEME_ACTIONS_TYPES.SET_DARK_THEME
});
