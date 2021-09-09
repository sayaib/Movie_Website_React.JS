import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Webseries.css";

const WhatIf = () => {
  return (
    <>
      <div className="series_body">
        <h1>What If...?</h1>
        <p>2021 ‧ Sci-fi ‧ 1 season</p>
        <p>7.7/10 IMDb</p>
        <p>93% Rotten Tomatoes</p>
        <h6>
          Reimagining noteworthy events in the Marvel Cinematic Universe and
          creating a multiverse of infinite possibilities.
        </h6>
        <img
          className="mt-5"
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD6794165D02040B9E83010226F93F2CE42226DB2C3F587F854B49A4B64C095E/scale?width=1200&aspectRatio=1.78&format=jpeg"
          alt="Logo"
        />
      </div>
    </>
  );
};

export default WhatIf;