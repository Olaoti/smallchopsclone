import React, { useState } from "react";
import Drinkslist from "./Drinkslist";

function Drinks() {
  const [drinksarray, setDrinksarray] = useState(Drinkslist);
  const plusclick = (index) => {
    const newList = [...drinksarray];
    newList[index].unit++;
    newList[index].total += 300;
    setDrinksarray(newList);
  };
  const minusclick = (index) => {
    const newList = [...drinksarray];
    if (newList[index].unit > 0) {
      newList[index].unit--;
      newList[index].total -= 300;
    }

    setDrinksarray(newList);
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
            {drinksarray?.map((drink, index) => {
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
                      <div className="price">₦ {drink?.total}</div>
                      <div
                        className="change point"
                        onClick={() => minusclick(index)}
                      >
                        -
                      </div>
                      <div className="zero">{drink.unit}</div>
                      <div
                        className="change point"
                        onClick={() => plusclick(index)}
                      >
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
}

export default Drinks;
