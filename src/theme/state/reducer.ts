import { themeInitialState } from "./initial-state";
import { ThemeEnum } from "enums/ThemeEnum";
import { THEME_ACTIONS_TYPES, ThemeActionTypes } from "./action-creators";

const themeReducer: React.Reducer<ThemeEnum, ThemeActionTypes> = (
  theme = themeInitialState,
  action
) => {
  switch (action.type) {
    case THEME_ACTIONS_TYPES.TOGGLE_THEME:
      return theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    case THEME_ACTIONS_TYPES.SET_DARK_THEME:
      return ThemeEnum.DARK;
    default:
      return theme;
  }
};

export { themeReducer };
