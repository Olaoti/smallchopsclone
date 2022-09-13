import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Packageslist from "../components/Packageslist";
import arrow from "../Assets/right-arrow-brown.svg";

const Corporate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [customquantity, setCustomquantity] = useState(0);
  const minusclick = () => {
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
    <div className="event corporate">
      <Navbar />
      <div className="event__section">
        <div className="event__section__info">
          <div className="sectionhead">corporate ordering</div>
          <div className="form-section">
            <div>
              company name
              <input type="text" />
            </div>
            <div>
              delivery date and time
              <input type="date" />
            </div>
            <div>
              company address
              <input type="text" />
            </div>
            <div>
              rep name
              <input type="text" />
            </div>
            <div>
              rep email
              <input type="email" />
            </div>
            <div>
              rep phone number
              <input type="number" />
            </div>
          </div>
          <div className="viewpackagesbtn">
            Package<span className="point">Select Package(s)</span>
          </div>
        </div>
        <div className="event__section__content">
          <div className="main-content">
            <div className="sectionhead">Packages</div>
            <div className="packages-content">
              {Packageslist.map((pack) => {
                return (
                  <div className="each-content" key={pack?.id}>
                    <div className="circle-line">
                      <div className="line"></div>
                      <div className="circle">
                        <div className="inner-circle"></div>
                      </div>
                      <div className="line bottom"></div>
                    </div>
                    <img src={pack?.pimg} alt="" />
                    <div className="content-quantity">
                      <div className="change-section">
                        <div className="change point" onClick={minusclick}>
                          -
                        </div>
                        <div className="zero">{customquantity}</div>
                        <div className="change point" onClick={plusclick}>
                          +
                        </div>
                      </div>
                      <div className="content-name">{pack?.pname}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="drinks-box point">
              <input type="checkbox" name="drink-box" className="checkbox" /> I
              want drinks with my Order
            </div>
          </div>
          <div className="checkout-section">
            <div className="content-info">
              <div className="edit-info point">
                {" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
                Edit Info{" "}
              </div>
              <div className="total">
                <span>Total</span>0
              </div>
            </div>
            <div className="checkout">
              <div className="question">Done Selecting your package?</div>
              <div className="button">Checkout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
