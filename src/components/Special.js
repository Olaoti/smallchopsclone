import React from "react";

import Followus from "./Followus";
import Treats from "./Treats";

import bigbowl from "../Assets/specialimages/Big-Bowl.png";
import bowlfries from "../Assets/specialimages/bowl-fries.png";
import ketchup from "../Assets/specialimages/ketchup.png";
import picnicmat from "../Assets/specialimages/picnic-mat.png";
import redpepper from "../Assets/images/red-pepper-opposite.png";

const Special = () => {
  return (
    <div className="special">
      <div className="followsection">
        <Followus />
      </div>
      <div className="special__contents">
        <div className="special__contents__main-contents">
          <div className="special__contents__main-contents__texts">
            <div className="heading">
              Or would you like something particularly <span> special?</span>
            </div>
            <div className="mini-text">
              Our Treat Packages are perfect for those days with extra wins,
              delicious exclusive content, and great for gifting.
            </div>
          </div>
          <div className="special__contents__main-contents__images">
            <div className="bgimages">
              <img src={bowlfries} alt="" className="friesimg" />
              <img src={ketchup} alt="" className="ketchupimg" />
              <img src={picnicmat} alt="" className="matimg" />
              <img src={redpepper} alt="" className="pepperimg" />
            </div>
            <div className="mainimg">
              <img src={bigbowl} alt="" className="bigbowl" />
            </div>
          </div>
        </div>
        <div className="special__contents__treat">
          <div className="special__contents__treat__head">
            <div className="head">
              <div>treat Packages</div>
            </div>
            <div className="line"></div>
          </div>
          <Treats />
        </div>
      </div>
    </div>
  );
};

export default Special;
