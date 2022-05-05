import React from "react";
import SizeChoice from "./SizeChoice";

const Choice = ({ src, setSrc, copyEvent, setCopyEvent }) => {

	return (
		<div className="container">
			<img src={src} id="img1" width="250" height="auto" />
			<SizeChoice src={src} setSrc={setSrc} copyEvent={copyEvent} setCopyEvent={setCopyEvent} />
		</div>
	);
};

export default Choice;