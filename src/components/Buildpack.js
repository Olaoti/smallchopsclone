import React from "react";
import chicken from "../Assets/buildpackimg/chicken.png";
import springroll from "../Assets/buildpackimg/springroll.png";
import puffpuff from "../Assets/buildpackimg/puffpuff.png";

const Buildpack = () => {
  return (
    <div className="buildpack">
      <div className="buildpack__images">
        <div className="griddedimages">
          <img src={springroll} alt="" />
          <img src={chicken} alt="" />
          <div className="puffimg">
            <img src={puffpuff} alt="" className="puff" />
          </div>
        </div>
      </div>
      <div className="buildpack__texts">
        <div className="heading">Or build your own pack!</div>
        <div className="mini-text">
          You can now create a custom package or ten! With all your favorite
          small chops snacks to choose from, tell us what you like.
        </div>
        <div className="filledbtn">Build Your Pack</div>
      </div>
    </div>
  );
};

export default Buildpack;
