import { useEffect, useState, useRef } from "react";
import FileResizer from "react-image-file-resizer";

const useResize = () => {
	const fileInput = useRef();
	const [width, setWidth] = useState(null);
	const [height, setHeigth] = useState(null);
	const [modifiedImg, setModifiedImg] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (fileInput.current) {
			resize(fileInput.current.files[0], width, height);
		}
	}, [fileInput, width, height]);

	const resize = (file, width, height) => {
		setLoading(true);
		try {
			FileResizer.imageFileResizer(
				file, // * file
				width, // * maxWidth in pixel
				height, // * maxHeight in pixel
				file.type, // * compressFormat
				100, // * quality
				0, // * rotation
				(uri) => {
					setModifiedImg(uri);
					if (localStorage) {
						localStorage.clear();
					}
					localStorage.setItem("src", uri);
				},
				"base64" // * outputType
			);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
			setError(false);
		}
	};
	return {
		setWidth,
		setHeigth,
		modifiedImg,
		setModifiedImg,
		loading,
		error,
		fileInput,
	};
};

export default useResize;
