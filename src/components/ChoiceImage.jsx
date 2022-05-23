import React, { useEffect, useLayoutEffect } from "react";
import useOriginal from "../hooks/useOriginal";
import useResize from "../hooks/useResize";

const ChoiceImage = ({ src }) => {
	const { file, width, originalImgRef } = useOriginal();
	const { setWidth, setHeight, modifiedImg, fileInput, loading, error } =
		useResize();

	const onClick = (width = "auto", height = "auto") => {
		setWidth(width);
		setHeight(height);
	};

	const detectRatio = (width, height) => {
		if (width > height) {
			console.log(width, height, "paysage");
		} else if (height > width) {
			console.log("Portrait");
		}
	};

	useEffect(() => {
		console.log(width);
	}, [width]);

	useLayoutEffect(() => {
		if (originalImgRef.current) {
			detectRatio(originalImgRef.current.width, originalImgRef.current.height);
			console.log(originalImgRef.current);
		}
	}, [file]);

	return (
		<div className="row">
			<div className="choices">
				<h4>1600 pixels</h4>
				<img
					src={src}
					alt="Origin Img"
					onClick={(e) => onClick(e.target.width, e.target.height)}
					ref={originalImgRef}
				/>
			</div>
			<div className="choices">
				<h4>1200 pixels</h4>
				<img
					src={src}
					alt="Origin Img"
					onClick={(e) => onClick(e.target.width, e.target.height)}
					ref={originalImgRef}
				/>
			</div>
			<div className="choices">
				<h4>800 pixels</h4>
				<img
					src={src}
					alt="Origin Img"
					onClick={(e) => onClick(e.target.width, e.target.height)}
					ref={originalImgRef}
				/>
			</div>
		</div>
	);
};

export default ChoiceImage;
