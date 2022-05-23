import React, { useEffect, useLayoutEffect } from "react";
import useOriginal from "../hooks/useOriginal";
import useResize from "../hooks/useResize";

const ChoiceImage = ({ srcOrigin, srcModif }) => {
	const { file, width, height, originalImgRef } = useOriginal();
	const { setWidth, setHeight, fileInput, loading, error } = useResize();

	const onClick = (e, w = "auto", h = "auto") => {
		setWidth(w);
		setHeight(h);
		detectRatio(originalImgRef.current.width, originalImgRef.current.height);
	};

	const detectRatio = (width, height) => {
		if (width > height) {
			console.log(width, height, "paysage");
		} else if (height > width) {
			console.log(width, height, "Portrait");
		}
	};

	useEffect(() => {
		console.log(file);
	}, [file]);

	useEffect(() => {
		if (fileInput.current) {
			console.log(fileInput);
			resize(fileInput.current.files[0], width, height);
		}
	}, [fileInput, width, height]);

	return (
		<div>
			{srcOrigin && (
				<div className="row">
					<div className="choices">
						<h4>1600 pixels</h4>
						<img
							value="1600"
							src={srcOrigin}
							alt="Origin Img"
							onClick={() => {
								setWidth(1600);
							}}
							ref={originalImgRef}
						/>
					</div>
					<div className="choices">
						<h4>1200 pixels</h4>
						<img
							value="1200"
							src={srcOrigin}
							alt="Origin Img"
							onClick={() => {
								setWidth(1200);
							}}
						/>
					</div>
					<div className="choices">
						<h4>800 pixels</h4>
						<img
							value="800"
							src={srcOrigin}
							alt="Origin Img"
							onClick={() => {
								setWidth(800);
							}}
						/>
					</div>
					<div className="choices">
						<h4>400 pixels</h4>
						<img
							value="400"
							src={srcOrigin}
							alt="Origin Img"
							onClick={() => {
								setWidth(400);
							}}
						/>
					</div>
					<div className="choices">
						<h4>80 pixels</h4>
						<img
							value="80"
							src={srcOrigin}
							alt="Origin Img"
							onClick={() => {
								setWidth(80);
							}}
						/>
					</div>
				</div>
			)}

			{srcModif && (
				<div>
					<img src={srcModif} />
				</div>
			)}
		</div>
	);
};

export default ChoiceImage;
