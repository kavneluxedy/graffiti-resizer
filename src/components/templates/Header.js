import React from "react";
import { Link } from "react-router-dom";
import SvgTitle from "../../common/img/svg/SvgTitle.js";
import SvgAuthor from "../../common/img/svg/SvgAuthor.js";

const Header = () => {
  return (
    <>
      <div className="background"></div>

      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/home">
            <SvgTitle />
          </Link>
        </div>
        <input id="menu__toggle" type="checkbox" />

        <label htmlFor="menu__toggle" className="menu__btn">
          <span></span>
        </label>

        <ul className="menu__box">
          <div className="li-separate"></div>
          <li>
            <Link className="menu__item" to="/home">
              Accueil
            </Link>
          </li>

          <div className="li-separate"></div>

          <li>
            <Link className="menu__item" to="/app">
              Redimensionner une autre image
            </Link>
          </li>

          <div className="li-separate"></div>

          <li>
            <Link className="menu__item" to="https://www.graffiti.fr/">
              Aller sur le site de l'agence Graffiti
            </Link>
          </li>

          <div className="li-separate"></div>

          <li>
            <Link className="menu__item" to="/help">
              Obtenir de l'aide
            </Link>
          </li>

          <div className="li-separate"></div>

          <div className="menu-item">
            <SvgAuthor />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
