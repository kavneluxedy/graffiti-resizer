import React from "react";
import SvgAuthor from "../assets/img/svg/SvgAuthor";
import { Link } from "react-router-dom";
import SvgHome from "../assets/img/svg/SvgHome";

const Home = () => {
  return (
    <div className="home">
      <Link to="/app">
        <div className="home">
          <div className="title">
            <SvgHome width="300px" />
          </div>
          <div className="author">
            <SvgAuthor />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;