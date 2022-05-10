import { useEffect, useState, useRef, useMemo } from "react";
import FileResizer from "react-image-file-resizer";
import useOriginal from "./useOriginal";

const useResize = () => {
	const fileInput = useRef();
	const originalImgRef = useRef();
	const [width, setWidth] = useState(null);
	const [heigth, setHeigth] = useState(null);
	const [modifiedImg, setModifiedImg] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (fileInput.current) {
			resize(fileInput.current.files[0], width, heigth);
		}
	}, [fileInput, width, heigth]);

	const resize = (file, width, heigth) => {
		setLoading(true);
		try {
			FileResizer.imageFileResizer(
				file, // * file
				width, // * maxWidth in pixel
				heigth, // * maxHeight in pixel
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
			// var type = fileInput.current.type.replace("image/", ""); // ! TO DO / CHANGE FILE INPUT
			// var prefix = fileInput.current.name.replace(/.jpg/ || /.jpeg/ || /.png/ ||
			// /.gif/, ""); var tmp = fileInput.current.files[0].name.indexOf("."); var
			// suffix = fileInput.current.files[0].name.substr(tmp); var fileName = prefix +
			// "_" + "UserChoice" + suffix;
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
		originalImgRef,
	};
};

export default useResize;
