import React, { useContext, ReactNode, useEffect } from "react";
import classnames from "classnames";
import { ThemeContext } from "theme/state/context";
import { ThemeEnum } from "enums/ThemeEnum";
import { toggleTheme, setDarkTheme } from "theme/state/action-creators";
import { themeToSwitchTo } from "theme/utils/themeToSwitchTo";
import { isDarkMode } from "theme/utils/isDarkMode";

import dark from "styles/theme/dark/root.module.css";
import light from "styles/theme/light/root.module.css";
import "./theme.css";

interface ThemePropTypes {
  children: ReactNode;
}

const Theme = ({ children }: ThemePropTypes) => {
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
        [light.root]: theme === ThemeEnum.LIGHT,
        [dark.root]: theme === ThemeEnum.DARK
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

export { Theme };
