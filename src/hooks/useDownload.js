import download from "downloadjs";
import { useEffect } from "react";
import useResize from "../hooks/useResize";

const Download = () => {
    localStorage.clear();

    console.log(localStorage);

	const { modifiedImg } = useResize();

	useEffect(() => {
		console.log(modifiedImg);
	}, [modifiedImg]);

	const downloadHandler = (file, filename = "filename", type) => {
        console.log('ok');
		new Promise(
			() => {
				if (file) {
					download(file, filename, type); 
				}
			},
			() => {
				console.error("Promise Rejected");
			}
		);
	}
    return { downloadHandler };
};

export default Download;
