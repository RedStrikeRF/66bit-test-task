import { useTheme } from "@app/providers/theme";
import "./ThemeSwitcher.scss";

import moon from "@assets/img/moon.svg";
import sun from "@assets/img/sun.svg";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      <span className="theme-switcher__slider">
        <span className="theme-switcher__icon theme-switcher__icon--light">
          <img src={sun} alt="light switcher" />
        </span>
        <span className="theme-switcher__icon theme-switcher__icon--dark">
          <img src={moon} alt="dark switcher" />
        </span>
      </span>
    </button>
  );
};
