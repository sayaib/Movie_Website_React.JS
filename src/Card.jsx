import React from "react";
import "./App.css";

const Card = (props) => {
  return (
    <>
      <div className="movie_card">
        <div className="cardImg">
          <img src={props.image} alt="" />
        </div>
        <div>
          <h5>{props.name}</h5>
          <p>{props.imdb}</p>
          <a target="_blank" href={props.link}>
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
