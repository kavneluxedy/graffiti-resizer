import React, { useRef, useState } from "react";
import Header from "./templates/Header";

const Home = () => {
	const enter = useRef();

	return (
		<div className="container">
			<Header />
			<a href="/app" className="enter">
				<span ref={enter}>GO</span>
			</a>
		</div>
	);
};

export default Home;
