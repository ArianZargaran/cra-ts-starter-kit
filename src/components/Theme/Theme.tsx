import React, { useContext, ReactNode } from 'react';
import classnames from 'classnames';
import { ThemeContext } from 'theme/context';
import { ThemeEnum } from 'theme/ThemeEnum';
import { toggleTheme } from 'theme/action-creators';
import { themeToSwitchTo } from 'utils/themeToSwitchTo';

import dark from 'styles/theme/dark/root.module.css';
import light from 'styles/theme/light/root.module.css';
import './theme.css';

interface ThemePropTypes {
  children: ReactNode;
}

export const Theme = ({ children }: ThemePropTypes) => {
  const { theme, dispatch } = useContext(ThemeContext);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <section className={classnames("wtf-app", {
      [light.root]: theme === ThemeEnum.light,
      [dark.root]: theme === ThemeEnum.dark
    })}>
      <div className="wtf-theme_switch-wrapper">
        <button
          className="wtf-theme_switch-button"
          onClick={handleClick}>
            {`Switch to ${themeToSwitchTo(theme)} Mode`}
        </button>
      </div>
      { children }
    </section>
  );
};
