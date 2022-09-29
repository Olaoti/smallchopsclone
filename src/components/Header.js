import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header__text">
        Order small chops for <br />
        today, tomorrow or <br /> whenever!
      </div>
      <div className="header__btn">Order Now</div>
      <div className="header__animation">
        <div className="openup">
          <div className="opened">
            <div className="leftopen"></div>
            <div className="mainopen"></div>
            <div className="rightopen"></div>
          </div>
          <div className="opentip"></div>
        </div>

        <div className="relatived">
          <div className="top">
            <div className="cover"></div>
            <div className="covertip"></div>
          </div>
          <div className="middle">
            <div className="left"></div>
            <div className="mid"></div>
            <div className="right"></div>
          </div>
        </div>

        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Header;
