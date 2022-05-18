import React from "react";
import SvgHomeTitle from "../assets/img/svg/SvgHomeTitle";
import SvgHomeAuthor from "../assets/img/svg/SvgHomeAuthor";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container">
			<Link to="app">
				<div className="home">
					<div className="title">
						<SvgHomeTitle />
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
