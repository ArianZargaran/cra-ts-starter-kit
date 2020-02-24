import { ThemeEnum } from "./ThemeEnum";

export enum THEME_ACTIONS_TYPES {
  TOGGLE_THEME = "TOGGLE_THEME",
}

export interface ThemeActionTypes {
  type: THEME_ACTIONS_TYPES,
  payload?: ThemeEnum
}

export const toggleTheme = (): ThemeActionTypes => ({
  type: THEME_ACTIONS_TYPES.TOGGLE_THEME
})
