import download from "downloadjs";

const Download = () => {
	const downloadHandler = (file, filename = "filename", type) => {
		download(file, filename, type);
	};
	return { downloadHandler };
};

export default Download;
