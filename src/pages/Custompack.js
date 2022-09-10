import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import custompackimg from "../Assets/images/custompack.png";
import Packagebackground from "../components/Packagebackground";
import Contentlist from "../components/Contentlist";

const Custompack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [packname, setPackname] = useState("Custom Pack");
  const [customquantity, setCustomquantity] = useState(0);
  const minusclick = (id) => {
    if (customquantity > 0) {
      setCustomquantity(customquantity - 1);
    } else {
      setCustomquantity(0);
    }
  };
  const plusclick = () => {
    setCustomquantity(customquantity + 1);
  };
  return (
    <div className="packages custompack">
      <Navbar />
      <div className="packages__box">
        <div className="packages__box__description">
          <div className="packagebackground">
            <Packagebackground />
          </div>
          <div className="question">Build Your Pack</div>
          <div className="package-name head">
            <input
              type="text"
              placeholder="Enter Pack Name"
              value="Custom Pack"
              className="point"
            />
          </div>
          <div className="miniinfo">Customise your pack name</div>
          <div className="package-image">
            <img src={custompackimg} alt="custom pack image" className="pimg" />
          </div>
          <div className="details-box">
            <div className="price-section">
              <div className="price">
                ₦ 0<span>per pack</span>
              </div>
            </div>
            <div className="cart-text point">Add to Cart</div>
          </div>
          <div className="drinks-box">
            <input type="checkbox" name="drink-box" className="checkbox" /> I
            want drinks with my Order
          </div>
        </div>
        <div className="packages__box__content">
          <div className="content-section">
            <div className="content-heading head">Content</div>
            <div className="packages-content">
              {Contentlist.map((content) => {
                return (
                  <div className="each-content" key={content.id}>
                    <div className="content-img">
                      {content.contimg && <img src={content.contimg} alt="" />}
                    </div>
                    <div className="circle-line">
                      <div className="line"></div>
                      <div className="circle">
                        <div className="inner-circle"></div>
                      </div>
                      <div className="line bottom"></div>
                    </div>
                    <div className="content-quantity">
                      <div className="change-section">
                        <div
                          className="change point"
                          onClick={minusclick}
                          id={content.id}
                        >
                          -
                        </div>
                        <div className="zero">{customquantity}</div>
                        <div
                          className="change point"
                          onClick={plusclick}
                          id={content.id}
                        >
                          +
                        </div>
                      </div>
                      <div className="content-name">{content.contname}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custompack;
