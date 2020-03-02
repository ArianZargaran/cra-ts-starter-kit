import { ThemeEnum } from "enums/ThemeEnum";
import { themeToSwitchTo } from "../themeToSwitchTo";

describe("themeToSwitchTo", () => {
  it("should return ThemeEnum.DARK when theme === ThemeEnum.LIGHT", () => {
    expect(themeToSwitchTo(ThemeEnum.LIGHT)).toBe(ThemeEnum.DARK);
  });

  it("should return ThemeEnum.LIGHT when theme === ThemeEnum.DARK", () => {
    expect(themeToSwitchTo(ThemeEnum.DARK)).toBe(ThemeEnum.LIGHT);
  });
});
