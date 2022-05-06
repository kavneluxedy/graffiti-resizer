import FileResizer from "react-image-file-resizer";
import download from "downloadjs";
import { useContext, useEffect, useRef } from "react";
import NewImageContext from "../utils/NewImageContext";

const SizeChoice = () => {
	const [src, setSrc, copyEvent, setCopyEvent] = useContext(NewImageContext);
	const { customEvent } = copyEvent;

	const fileToDL = useRef(<img />);

	useEffect(() => {
		if (!src) {
			setSrc(localStorage.getItem("src"));
			console.log(customEvent);
		}
	}, []);

	const resizeFile = (file) =>
		new Promise((resolve) => {
			FileResizer.imageFileResizer(
				file,
				420,
				file.height,
				"PNG",
				100,
				0,
				(uri) => {
					resolve(uri);
				},
				"base64"
			);
		});

	const onClick = async (event) => {
		// Evènement provenant du clic de choix de taille d'image
		try {
			const file = customEvent.target.files[0]; // ! Get CustomEvent
			const image = await resizeFile(file);
			setSrc(image);
			downloadFile();
		} catch (err) {
			console.error(err);
		}
	};

	const downloadFile = () => {
		const oldName = customEvent.target.files[0].name;
		const newName = oldName.replace(/.jpeg|.jpg|.png|.gif/gi, "");
		console.log(newName);
		download(src, newName + "_" + fileToDL.current.classList[1], "image/png");
	};

	return (
		<div className="container">
			{/* LANDSCAPE */}

			<div className="choice landscape400">
				<img
					className="choice landscape400"
					src={src} // ! L'image n'est pas encore retouché au premier Render
					onClick={(e) => onClick(e)} // ! Etape 1 (pour la résolution du problème)
					alt="New Resized Image"
					ref={fileToDL}
				/>
			</div>
		</div>
	);
};

export default SizeChoice;
