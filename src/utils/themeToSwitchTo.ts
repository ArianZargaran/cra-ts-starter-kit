import { ThemeEnum } from "theme/ThemeEnum";

export const themeToSwitchTo = (theme: ThemeEnum) => {
  return theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;
};
