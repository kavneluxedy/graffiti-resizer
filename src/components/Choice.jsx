import React from "react";
import SizeChoice from "./SizeChoice";

const Choice = ({ src }) => {

	return (
		<div className="container">
			<img src={src} id="img1" width="250" height="auto" />
		</div>
	);
};

export default Choice;