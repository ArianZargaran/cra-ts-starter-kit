import { ThemeEnum } from "enums/ThemeEnum";
import { themeToSwitchTo } from "../themeToSwitchTo";

describe("themeToSwitchTo", () => {
  it("should return ThemeEnum.dark when theme === ThemeEnum.light", () => {
    expect(themeToSwitchTo(ThemeEnum.light)).toBe(ThemeEnum.dark);
  });

  it("should return ThemeEnum.light when theme === ThemeEnum.dark", () => {
    expect(themeToSwitchTo(ThemeEnum.dark)).toBe(ThemeEnum.light);
  });
});
