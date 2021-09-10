import React from "react";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap';

const Card = (props) => {
  return (
    <>
        <div className="movie_card">
          <div className="cardImg">
            <img src={props.image} alt="" />
          </div>
          <div className="pt-4">
            <h5 className="title">{props.name}</h5>
            <p>{props.imdb}</p>
            <a href={props.link}>
              <Button className="btn" variant="success">Download Now</Button>
            </a>
          </div>
        </div>
    </>
  );
};

export default Card;
