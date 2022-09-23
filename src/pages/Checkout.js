import React, { useState } from "react";
import Navbar from "../components/Navbar";
import visa from "../Assets/paymentlogos/visa-logo.svg";
import verve from "../Assets/paymentlogos/verve-logo.svg";
import mastercard from "../Assets/paymentlogos/mastercard-logo.svg";
import custompack from "../Assets/images/custompack.png";
import Contentlist from "../components/Contentlist";
import Packageslist from "../components/Packageslist";

const Checkout = () => {
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
    <div className="check">
      <Navbar />
      <div className="check__section">
        <div className="check__section__cart">
          <div className="cart-head">Cart</div>
          <div className="ordered-section">
            <div className="cancel">
              <span></span>
              <span></span>
            </div>
            <div className="packimg">
              <img src={custompack} alt="" />
            </div>
            <div className="orderedinfo">
              <div className="name">
                Custom pack 1
                {Contentlist.map((cont) => {
                  return <div>{cont.unit > 0 && cont.contname}</div>;
                })}
              </div>
              <div className="change-section">
                <div className="change point" onClick={minusclick}>
                  -
                </div>
                <div className="zero">{customquantity}</div>
                <div className="change point" onClick={plusclick}>
                  +
                </div>
              </div>
            </div>
            <div className="price">17,580</div>
          </div>
        </div>
        <div className="check__section__details">
          <div className="head">Checkout</div>
          <div className="deliverytime">
            <div className="input">
              {" "}
              delivery date
              <input type="date" />
            </div>
            <div className="input">
              {" "}
              delivery window
              <input type="date" />
            </div>
          </div>
          <div className="login">
            Fill in your details or <span className="point">Login</span>
          </div>
          <div className="textline">
            <div className="text">
              <div>Delivery information</div>
            </div>
            <div className="line"></div>
          </div>
          <div className="informations">
            <div className="input">
              Name
              <input type="text" />
            </div>
            <div className="input">
              phone number
              <input type="number" />
            </div>
            <div className="input">
              region
              <input type="text" />
            </div>
            <div className="input">
              email
              <input type="email" />
            </div>
            <div className="input">
              full address
              <input type="text" />
            </div>
          </div>
          <div className="textline">
            <div className="text">
              <div>Delivery options</div>
            </div>
            <div className="line"></div>
          </div>
          <div className="input" id="checkbox">
            <input type="radio" checked />
            Delivery to your address
          </div>
          <div className="smalltext">
            (Items will be delivered to your address)
          </div>
          <div className="payment-method point">
            <div className="filled method">
              <div className="circle"></div> <div>Pay with Card</div>
            </div>
            <div className="method">
              <div className="circle"></div>Pay for me
            </div>
          </div>
          <div className="total-section">
            <div className="textline">
              <div className="text">
                <div>total cost</div>
              </div>
              <div className="line"></div>
              <div className="text dark">
                <div>100</div>
              </div>
            </div>
            <div className="textline">
              <div className="text">
                <div>delivery fee</div>
              </div>
              <div className="line"></div>
              <div className="text dark">
                <div>00</div>
              </div>
            </div>
            <div className="input">
              enter coupon code
              <div className="validate-section">
                <input type="text" />
                <div className="validate btn">validate</div>
              </div>
            </div>
            <div className="textline">
              <div className="text">
                <div>Total Amount to Pay</div>
              </div>
              <div className="line"></div>
              <div className="text dark">
                <div>200</div>
              </div>
            </div>
          </div>
          <div className="payment-apps">
            <div className="paystack">
              <div className="top">Secured payments with Paystack</div>
              <div className="appslogos">
                <img src={mastercard} alt="" />
                <img src={visa} alt="" />
                <img src={verve} alt="" />
              </div>
            </div>
            <div className="button">Pay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
