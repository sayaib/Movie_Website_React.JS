import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Webseries.css";

const GOT = () => {
  return (
    <>
      <div className="series_body">
        <h1>Game of Thrones</h1>
        <p>2011 ‧ Drama ‧ 8 seasons</p>
        <p>9.2/10 IMDb</p>
        <p>89% Rotten Tomatoes</p>
        <h6>
          Nine noble families wage war against each other in order to gain
          control over the mythical land of Westeros. Meanwhile, a force is
          rising after millenniums and threatens the existence of living men.
        </h6>
        <img className="mt-5"
          src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4904/474904-h"
          alt="Logo"
        />
      </div>
    </>
  );
};

export default GOT;
