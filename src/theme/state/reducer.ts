import { themeInitialState } from "./initial-state";
import { ThemeEnum } from "enums/ThemeEnum";
import { THEME_ACTIONS_TYPES, ThemeActionTypes } from "./action-creators";

export const themeReducer: React.Reducer<ThemeEnum, ThemeActionTypes> = (
  theme = themeInitialState,
  action
) => {
  switch (action.type) {
    case THEME_ACTIONS_TYPES.TOGGLE_THEME:
      return theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;
    case THEME_ACTIONS_TYPES.SET_DARK_THEME:
      return ThemeEnum.dark;
    default:
      return theme;
  }
};
