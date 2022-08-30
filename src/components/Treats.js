import React from "react";
import Packageslist from "./Packageslist";

const Treats = () => {
  const treatlist = Packageslist?.filter((treat) => {
    return treat.pname.includes("treat");
  });
  return (
    <div className="treats">
      {treatlist.map((treatbox) => {
        return (
          <div key={treatbox.id}>
            <div className="treatimg">
              {treatbox.treatimg && <img src={treatbox.treatimg} alt="" />}
            </div>
            <div className="infos">
              <div className="infos__name">{treatbox.pname}</div>
              <div className="infos__btn">
                <span>Add to Cart</span>{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Treats;
