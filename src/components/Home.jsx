import React from "react";
import SvgHomeTitle from "../assets/img/svg/SvgHomeTitle";
import SvgHomeAuthor from "../assets/img/svg/SvgHomeAuthor";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import SvgHome from "assets/img/svg/SvgHome";

const Home = () => {
	return (
		<div className="home">
			<Link to="/app">
				<div className="home">
					<div className="title">
						<SvgHome width="300px" />
					</div>
					<div className="author">
						<SvgHomeAuthor />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Home;
