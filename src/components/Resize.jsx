import React from "react";
import { useEffect } from "react";
import useOriginal from "../hooks/useOriginal";
import useResize from "../hooks/useResize";
import useDownload from "../hooks/useDownload";
import ChoiceImage from "./ChoiceImage";

const Resize = (props) => {
	const { file, setFile } = useOriginal();
	const { width, setWidth, setHeight, modifiedImg, fileInput, loading, error } =
		useResize();
	const { downloadHandler } = useDownload();

	useEffect(() => {
		if (file) {
			let name = file.name.replace(/.jpeg|.jpg|.png|.gif/gi, "");
			var toAdd = "_";
			let ext = file.type.replace("image/", ".");
			let fileName = name + toAdd + ext;
			downloadHandler(modifiedImg, fileName, file.type);
		}
	}, [modifiedImg]);

	return (
		<>
			{props.originalImg && (
				<div className="sub-container">
					<div className="row">
						<h3>Choisissez la taille d'image que vous souhaitez obtenir</h3>
					</div>
					<div className="col-33">
						<ChoiceImage src={props.originalImg.src} />
					</div>
					<div className="col">
						<br />
						Image Size (MB): <b>{props.originalImg.originalSizeMB}</b>
						<br />
						Image Size (KB): <b>{props.originalImg.originalSizeKB}</b>
					</div>
				</div>
			)}
		</>
	);
};
export default Resize;
