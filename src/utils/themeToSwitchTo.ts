import { ThemeEnum } from "enums/ThemeEnum";

export const themeToSwitchTo = (theme: ThemeEnum) => {
  return theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;
};
