import React from "react";
import { Link } from "react-router-dom";
import Packageslist from "./Packageslist";

const Treats = () => {
  const treatlist = Packageslist?.filter((treat) => {
    return treat.pname.includes("treat");
  });

  return (
    <div className="treats">
      {/*
      <h1>
        {Packageslist[0]?.content.map((con) => {
          return <h2 key={1}>{con.check}</h2>;
        })}
      </h1>*/}
      {treatlist.map((treatbox) => {
        return (
          <div key={treatbox.id}>
            <Link
              to={`/packages`}
              state={{ newid: treatbox.id }}
              className="link"
            >
              <div className="treatimg">
                {treatbox.treatimg && <img src={treatbox.treatimg} alt="" />}
              </div>
            </Link>
            <div className="infos">
              <div className="infos__name">{treatbox.pname}</div>
              <div className="infos__btn">
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Treats;
