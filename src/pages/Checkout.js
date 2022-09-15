import React from "react";
import Navbar from "../components/Navbar";

const Checkout = () => {
  return (
    <div className="check">
      <Navbar />
      <div className="check__section">
        <div className="check__section__cart">
          <div className="cart-head">Cart</div>
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
            Fill in your details or <span>Login</span>
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
          <div className="input">
            <input type="radio" checked />
            Delivery to your address
          </div>
          <div className="smalltext">
            (Items will be delivered to your address)
          </div>
          <div className="payment-method">
            <div className="filled">Pay with Card</div>
            <div>Pay for me</div>
          </div>
          <div className="total-section"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
