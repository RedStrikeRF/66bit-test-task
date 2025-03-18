import { Link } from "react-router-dom";
import { ThemeSwitcher, useTheme } from "@app/providers/theme"; 
import logo from "@assets/img/66bit_logo.svg"

import "./Header.scss";

export const Header = () => {

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Компания" />
        </Link>

        <address className="header__contacts">
          <a href="tel:+73432908476">+7 343 290 84 76</a>
          <a href="mailto:info@66bit.ru">info@66bit.ru</a>
        </address>

        <ThemeSwitcher />
      </div>
    </header>
  );
};
