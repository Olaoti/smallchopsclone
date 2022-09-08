import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import cart from "../Assets/cart-icon-brown.svg";
import logowhite from "../Assets/logowhite.svg";
import bgleaf from "../Assets/images/package-leaf.png";
import bgredpepper from "../Assets/images/red-pepper-opposite.png";
import bgredtomato from "../Assets/images/red-tomato.png";
import chopstable from "../Assets/images/chopstable.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuClick = () => {
    setShowMenu(true);
  };
  const cancelClick = () => {
    setShowMenu(false);
  };
  return (
    <div className="navbar">
      <div className="mobile-nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="cart mobile">
          <img src={cart} className="cart-img" alt="" width={35} height={30} />
          <div className="cart__order-no">
            <div>0</div>
          </div>
        </div>
        <div className="menu" onClick={menuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`mobile-navbar ${showMenu ? "show" : "none"}`}>
        <div className="mobile backgroundBg">
          <img
            src={chopstable}
            alt=""
            className="mainimg"
          />
          <img src={bgredtomato} alt="" className="tomatoimg" />
          <img src={bgredpepper} alt="" className="pepperimg" />
          <img src={bgleaf} alt="" className="leafimg" />
        </div>
        <div className="mobile top">
          <div className="logo">
            <img className="img" src={logowhite} alt="" />
          </div>
          <div className="cancel" onClick={cancelClick}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar__links">
          <Link className="link" to="/packages">
            <div className="packageslink">Our Packages</div>
          </Link>
          <div>
            Build your <span className="desktop">own</span> pack
          </div>
          <div>Events</div>
          <div>Corporate</div>
          <div>Contact</div>
          <div className="navbar__links__buttons">
            <div className="navbar__links__buttons__button btn">Sign in</div>
            <div className="cart desktop">
              <img
                src={cart}
                className="cart-img"
                alt=""
                width={35}
                height={30}
              />
              <div className="cart__order-no">
                <div>0</div>
              </div>
            </div>
          </div>
          <div className="mobile">View Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
