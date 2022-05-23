import { useEffect, useRef, useState } from "react";
import FileResizer from "react-image-file-resizer";

const useOriginal = () => {
	const originalImgRef = useRef();
	const [file, setFile] = useState(null);
	const [originalImg, setOriginalImg] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		makeOriginal(file);
	}, [file]);

	function makeOriginal(file) {
		setLoading(true);
		if (file) {
			try {
				FileResizer.imageFileResizer(
					file, // * file
					file.width, // * maxWidth in pixel
					file.height, // * maxHeight in pixel
					file.type, // * compressFormat
					100, // * quality
					0, // * rotation
					(uri) => {
						// * responseUriFunction
						setOriginalImg({
							src: uri,
							originalSizeMB: parseFloat(
								file.size * Math.pow(1024, -2)
							).toFixed(2),
							originalSizeKB: parseFloat(file.size / 1024).toFixed(2),
						});
					},
					"base64" // * outputType
				);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
				setError(false);
			}
		} else {
			// console.log("Please choose one file");
		}
	}

	return {
		file,
		setFile,
		originalImg,
		setOriginalImg,
		originalImgRef,
		loading,
		error,
	};
};

export default useOriginal;
