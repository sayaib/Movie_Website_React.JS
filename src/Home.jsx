import React from "react";
import Card from "./Card";
import CData from "./CData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const data = (val) => {
  return (
    <Card
      key={val.id}
      name={val.name}
      image={val.image}
      imdb={val.imdb}
      link={val.link}
    />
  );
};

const Home = () => {
  return (
    <>
      <div className="body">{CData.map(data)}</div>
    </>
  );
};

export default Home;
