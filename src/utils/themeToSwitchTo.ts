import { ThemeEnum } from "enums/ThemeEnum";

export const themeToSwitchTo = (theme: ThemeEnum) => {
  return theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
};
