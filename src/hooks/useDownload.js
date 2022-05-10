import download from "downloadjs";

const Download = () => {
	const downloadHandler = (file, filename = "filename", type) => {
		new Promise(
			() => download(file, filename, type),
			() => console.error("Promise Rejected")
		);
	};
	return { downloadHandler };
};

export default Download;
