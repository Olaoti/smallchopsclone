import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Contentlist from "../components/Contentlist";
import arrow from "../Assets/right-arrow-brown.svg";

const Event = () => {
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
    <div className="event mainevent">
      <Navbar />
      <div className="event__section">
        <div className="event__section__info">
          <div className="sectionhead">event ordering</div>
          <div className="form-section">
            <div>
              Full name
              <input type="text" />
            </div>
            <div>
              phone number
              <input type="number" />
            </div>
            <div>
              email
              <input type="email" />
            </div>
            <div>
              number of guests
              <input type="number" />
            </div>
            <div>
              event date
              <input type="date" />
            </div>
            <div>
              location
              <input type="text" />
            </div>
          </div>
          <div className="submit button">Submit</div>
        </div>
        <div className="event__section__content">
          <div className="main-content">
            <div className="sectionhead">content per serving</div>
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
                Total<span>₦ 0</span>
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

export default Event;
