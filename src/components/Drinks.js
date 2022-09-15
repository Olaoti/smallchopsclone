import React, { useState } from "react";
import coke from "../Assets/drinksimg/coke-bottles.png";
import fanta from "../Assets/drinksimg/fanta-bottles.png";
import sprite from "../Assets/drinksimg/sprite-bottles.png";

const Drinks = () => {
  const drinkslist = [
    {
      id: 1,
      img: coke,
      dname: "Coca - cola",
    },
    {
      id: 2,
      img: fanta,
      dname: "Fanta",
    },
    {
      id: 3,
      img: sprite,
      dname: "sprite",
    },
  ];
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

  const [drinksdisplay, setDrinksdisplay] = useState(false);
  const changedisplay = () => {
    if (drinksdisplay === false) {
      setDrinksdisplay(true);
    } else {
      setDrinksdisplay(false);
    }
  };

  return (
    <div>
      <div className={`drinks-box point`} onClick={changedisplay}>
        <input type="checkbox" name="drink-box" className="checkbox" /> I want
        drinks with my Order
      </div>

      <div className={`drinks-section ${drinksdisplay ? "" : "nodrinks"}`}>
        <div className="drinks">
          <div className="info">Select your drink(s)</div>
          <div className="packages-content">
            {drinkslist.map((drink) => {
              return (
                <div className="each-content" key={drink?.id}>
                  <div className="circle-line">
                    <div className="line"></div>
                    <div className="circle">
                      <div className="inner-circle"></div>
                    </div>
                    <div className="line bottom"></div>
                  </div>
                  <img src={drink?.img} alt="" />
                  <div className="content-quantity">
                    <div className="content-name">{drink?.dname} (small)</div>
                    <div className="change-section">
                      <div className="price">0</div>
                      <div className="change point" onClick={minusclick}>
                        -
                      </div>
                      <div className="zero">{customquantity}</div>
                      <div className="change point" onClick={plusclick}>
                        +
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="done btn" onClick={changedisplay}>
              Done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
