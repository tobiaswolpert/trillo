import React from "react";
import home from "../../img/SVG/home.svg";
import aircraft from "../../img/SVG/aircraft-take-off.svg";
import key from "../../img/SVG/key.svg";
import map from "../../img/SVG/map.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <img src={home} alt="home" className="side-nav__icon" />
            <span>Hotel</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <img src={aircraft} alt="aircraft" className="side-nav__icon" />
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <img src={key} alt="key" className="side-nav__icon" />
            <span>Car Rental</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <img src={map} alt="map" className="side-nav__icon" />
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; 2022 by trillo. All rights reserved.</div>
    </div>
  );
};

export default Sidebar;
