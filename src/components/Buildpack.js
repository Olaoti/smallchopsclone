import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import chicken from "../Assets/buildpackimg/chicken.png";
import springroll from "../Assets/buildpackimg/springroll.png";
import puffpuff from "../Assets/buildpackimg/puffpuff.png";

const Buildpack = () => {
  const rollRef = useRef(null);
  const chickenRef = useRef(null);
  const puffRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rollRef.current,
      { y: 15, x: 0 },
      {
        y: -15,
        x: 0,
        yoyo: true,
        repeat: -1,
        duration: 15,
        ease: "Power0.none",
      }
    );
  });
  useEffect(() => {
    gsap.fromTo(
      chickenRef.current,
      { y: 18, x: 0 },
      { y: 40, x: 0, yoyo: true, repeat: -1, duration: 14, ease: "Power0.none" }
    );
  });
  useEffect(() => {
    gsap.fromTo(
      puffRef.current,
      { y: 5, x: 0 },
      {
        y: -25,
        x: 0,
        yoyo: true,
        repeat: -1,
        duration: 13,
        ease: "Power0.none",
      }
    );
  });

  return (
    <div className="buildpack">
      <div className="buildpack__images">
        <div className="griddedimages">
          <img src={springroll} alt="" ref={rollRef} />
          <img src={chicken} alt="" ref={chickenRef} />
          <div className="puffimg">
            <img src={puffpuff} alt="" className="puff" ref={puffRef} />
          </div>
        </div>
      </div>
      <div className="buildpack__texts">
        <div className="heading">Or build your own pack!</div>
        <div className="mini-text">
          You can now create a custom package or ten! With all your favorite
          small chops snacks to choose from, tell us what you like.
        </div>
        <Link className="link" to="/custompack">
          <div className="filledbtn">Build Your Pack</div>
        </Link>
      </div>
    </div>
  );
};

export default Buildpack;
