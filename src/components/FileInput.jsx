import React, { useLayoutEffect, useState } from "react";
import FileResizer from "react-image-file-resizer";
import { useNavigate } from "react-router-dom";
import Choice from "./Choice";
import NewImageContext from "../utils/NewImageContext";
import SizeChoice from "./SizeChoice";

const FileInput = () => {
	const navigate = useNavigate();
	const [src, setSrc] = useState();
	const [copyEvent, setCopyEvent] = useState({
		customEvent: "Initial Event Obj",
	});

	const onChange = (e) => {
		const File = e.target.files[0];
		if (File) {
			e.preventDefault();
			setCopyEvent({ customEvent: { ...e } });
			try {
				FileResizer.imageFileResizer(
					e.target.files[0], // * file
					e.target.files[0].width, // * maxWidth in pixel
					e.target.files[0].height, // * maxHeight in pixel
					"JPEG", // * compressFormat
					100, // * quality
					0, // * rotation
					(uri) => {
						if (uri.length != 0) {
							let x = encodeURI(uri);
							let url = decodeURI(x);
							setSrc(url);
							localStorage.setItem("src", url); // * responseUriFunc
						}
					},
					"base64" // * outputType
				);
			} catch (err) {
				console.log(err);
			}
			// navigate("/choice", true); // ? Redirect into Resize Options page
		} else {
			console.log("Please select one file");
		}
	};

	useLayoutEffect(() => {
		if (!src) {
			setSrc(localStorage.getItem("src"));
		}
		localStorage.clear();
		localStorage.setItem("copyEvent", copyEvent);
	});

	return (
		<div className="container">
			<NewImageContext.Provider value={[src, setSrc, copyEvent, setCopyEvent]}>

				<label>
					We need your image to continue
					<input onChange={(e) => onChange(e)} type="file" />
				</label>

				<Choice src={src} />
				<SizeChoice />
				
			</NewImageContext.Provider>
		</div>
	);
};

export default FileInput;
