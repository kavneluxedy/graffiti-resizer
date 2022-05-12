import React from "react";
import SvgHomeTitle from "../assets/img/svg/SvgHomeTitle";
import SvgHomeAuthor from "../assets/img/svg/SvgHomeAuthor";

const Home = () => {
	return (
		<div className="container">
			<a href="app">
				<div className="home">
					<div className="title">
						<SvgHomeTitle />
					</div>
					<div className="author">
						<SvgHomeAuthor />
					</div>
				</div>
			</a>
		</div>
	);
};

export default Home;
