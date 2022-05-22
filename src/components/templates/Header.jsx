import React from "react";
import "../../App.css";
import "../../Menu.css";
import { Link } from "react-router-dom";
import SvgTitle from "../../assets/img/svg/SvgTitle";

const Header = () => {
  return (
    <>
      <div className="background"></div>

      <input id="menu__toggle" type="checkbox" />
      
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <div className="li-separate" />

        <li>
          <Link class="menu__item" to="/home">
            Accueil
          </Link>
        </li>

        <div className="li-separate" />

        <li>
          <Link class="menu__item" to="/app">
            Redimensionner une image
          </Link>
        </li>

        <div className="li-separate" />

        <li>
          <a class="menu__item" href="/about">
            A propos de nous
          </a>
        </li>

        <div className="li-separate" />

        <li>
          <a class="menu__item" href="/help">
            Besoin d'aide ?
          </a>
        </li>

        <div className="li-separate" />
      </ul>

      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/home">
            <SvgTitle />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
