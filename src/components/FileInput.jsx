import React, { useLayoutEffect, useState } from "react";
import FileResizer from "react-image-file-resizer";
import { useNavigate } from "react-router-dom";
import Choice from "./Choice";

const FileInput = () => {
	const navigate = useNavigate();
	const [src, setSrc] = useState();
	const [copyEvent, setCopyEvent] = useState(["Event Obj"]);

	const onChange = (e) => {
		const File = e.target.files[0];
		if (File) {
			e.preventDefault();
			setCopyEvent([{ ...e }]);
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
		if (localStorage.getItem("copyEvent") != copyEvent) {
			localStorage.clear();
			localStorage.setItem("copyEvent", copyEvent);
		}
		// console.log(copyEvent[0].currentTarget);
	});

	return (
		<div className="container">
			<label>
				We need your image to continue
				<input onChange={(e) => onChange(e)} type="file" />
			</label>

			<Choice
				src={src}
				setSrc={setSrc}
				copyEvent={copyEvent}
				setCopyEvent={setCopyEvent}
			/>
		</div>
	);
};

export default FileInput;
