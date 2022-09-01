import React from "react";
import Navbar from "../components/Navbar";
import Packageslist from "../components/Packageslist";
import cartwhite from "../Assets/cart-icon-white.svg";

const Packages = () => {
  return (
    <div className="packages">
      <Navbar />
      <div className="packages__box">
        <div className="packages__box__description">
          <div className="question">
            What Package Do You Feel Like Enjoying Today?
          </div>
          <div className="package-name head">{Packageslist[1].pname}</div>
          <div className="package-image">
            <img src={Packageslist[1].pimg} alt="" className="pimg" />
          </div>
          <div className="details-box">
            <div className="price-section">
              <div className="price">
                ₦ {Packageslist[1].price}
                <span>per pack</span>
              </div>
            </div>
            <div className="sign minus">-</div>
            <div className="quantity">0</div>
            <div className="sign plus">+</div>
            <div className="cart">
              <img src={cartwhite} alt="" />
            </div>
          </div>
        </div>
        <div className="packages__box__content">
          <div className="content-section">
            <div className="content-heading head">Content</div>
            <div className="packages-content">
              {Packageslist[1]?.content.map((content) => {
                return (
                  <div className="each-content">
                    <div className="content-img">
                      {content.img && <img src={content.img} alt="" />}
                    </div>
                    <div className="circle-line">
                      <div className="line"></div>
                      <div className="circle">
                        <div className="inner-circle"></div>
                      </div>
                      <div className="line bottom"></div>
                    </div>
                    <div className="content-quantity">
                      <span className="piece">{content.pieces}</span>{" "}
                      {content.cname}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="checkout">
            <div className="checkquestion">Done Selecting your package?</div>
            <div className="btn">Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
