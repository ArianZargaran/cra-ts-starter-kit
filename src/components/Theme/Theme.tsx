import React, { useContext, ReactNode, useEffect } from "react";
import classnames from "classnames";
import { ThemeContext } from "theme/context";
import { ThemeEnum } from "theme/ThemeEnum";
import { toggleTheme, setDarkTheme } from "theme/action-creators";
import { themeToSwitchTo } from "utils/themeToSwitchTo";
import { isDarkMode } from "utils/isDarkMode";

import dark from "styles/theme/dark/root.module.css";
import light from "styles/theme/light/root.module.css";
import "./theme.css";

interface ThemePropTypes {
  children: ReactNode;
}

export const Theme = ({ children }: ThemePropTypes) => {
  const { theme, dispatch } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode()) {
      dispatch(setDarkTheme());
    }
  }, [dispatch]);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={classnames({
        [light.root]: theme === ThemeEnum.light,
        [dark.root]: theme === ThemeEnum.dark
      })}
    >
      <div className="wtf-theme_switch-wrapper">
        <button className="wtf-theme_switch-button" onClick={handleClick}>
          {`Switch to ${themeToSwitchTo(theme)} Mode`}
        </button>
      </div>
      {children}
    </div>
  );
};
