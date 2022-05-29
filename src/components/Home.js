import React from "react";
import { Link } from "react-router-dom";
import SvgAuthor from "../common/img/svg/SvgAuthor.js";
import SvgHome from "../common/img/svg/SvgHome.js";

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
