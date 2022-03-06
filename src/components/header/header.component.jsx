import React from "react";
import logo from "../../img/logo.png";
import search from "../../img/SVG/magnifying-glass.svg";
import bookmark from "../../img/SVG/bookmark.svg";
import chat from "../../img/SVG/chat.svg";
import user from "../../img/user.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="trillo logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />

        <button className="search__button">
          <img src={search} alt="search" className="search__icon" />
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <img className="user-nav__icon" src={bookmark} alt="bookmark" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <img className="user-nav__icon" src={chat} alt="chat" />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img className="user-nav__user-photo" src={user} alt="user" />
          <span className="user-nav__user-name">Tobi</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
