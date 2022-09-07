import React from "react";

const Homeorder = () => {
  return (
    <div className="homeorder">
      <div className="homeorder__section event">
        <div className="image-sect">
          <div className="name">Event</div>
        </div>
        <div className="mini-text">
          An event without Smallchops is definitely just a gathering. It gets
          better; you can customise your order however you deem fit.
        </div>
        <div className="redirect point">ORDER FOR YOUR EVENT</div>
      </div>
      <div className="homeorder__section">
        <div className="image-sect">
          <div className="name">Corporate</div>
        </div>
        <div className="mini-text">
          Sometimes all you need for culture fit is a corporate hangout/event
          with a lot Smallchops. This is what we go to work for.
        </div>
        <div className="redirect point">place order</div>
      </div>
    </div>
  );
};

export default Homeorder;
