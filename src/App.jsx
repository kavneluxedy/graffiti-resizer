// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useLayoutEffect } from "react";
import useOriginal from "./hooks/useOriginal";
import useResize from "./hooks/useResize";
import useDownload from "./hooks/useDownload";
import Header from "./components/templates/Header";
import { Container } from "react-bootstrap";

const App = () => {
	const { file, setFile, originalImg, originalImgRef } = useOriginal();
	const { setWidth, setHeigth, modifiedImg, fileInput, loading, error } =
		useResize();
	const { downloadHandler } = useDownload();

	const onClick = (width = "auto", height = "auto") => {
		setWidth(width);
		setHeigth(height);
	};

	const detectRatio = (width, height) => {
		if (width > height) {
			console.log(width, height, "paysage");
		} else if (height > width) {
			console.log("Portrait");
		}
	};

	useEffect(() => {
		if (file) {
			let name = file.name.replace(/.jpeg|.jpg|.png|.gif/gi, "");
			var toAdd = "_";
			let ext = file.type.replace("image/", ".");
			let fileName = name + toAdd + ext;
			downloadHandler(modifiedImg, fileName, file.type);
		}
	}, [modifiedImg]);

	useLayoutEffect(() => {
		if (originalImgRef.current) {
			detectRatio(originalImgRef.current.width, originalImgRef.current.height);
		}
	}, [file]);

	const LandscapeChoice = () => {
		return (
			<Container>
				{originalImg && (
					<Container className="choice" value="landscape1920">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1920" className="choiceButton">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 1920 pixels
							</button>
						</a>
					</Container>
				)}
				<br />
				{originalImg && (
					<Container className="choice">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1600" className="choiceButton l1600">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 1600 pixels
							</button>
						</a>
					</Container>
				)}
				<br />
				{originalImg && (
					<Container>
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1200" className="choiceButton l1200">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 1200 pixels
							</button>
						</a>
					</Container>
				)}
				<br />
				{originalImg && (
					<Container>
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="800" className="choiceButton l800">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 800 pixels
							</button>
						</a>
					</Container>
				)}
				<br />
				{originalImg && (
					<Container>
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="400" className="choiceButton l400">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 400 pixels
							</button>
						</a>
					</Container>
				)}
				<br />
				{originalImg && (
					<Container>
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="80" className="choiceButton l80">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage Miniature | 80 pixels
							</button>
						</a>
					</Container>
				)}
			</Container>
		);
	};

	const PortraitChoice = () => {
		return (
			<Container>
				{originalImg && (
					<Container>
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1080" className="choiceButton p1080">
								{/* <img src={originalImg.src} width="50" /> */}
								Portrait | 1080 pixels
							</button>
						</a>
					</Container>
				)}
				<br />
				{originalImg && (
					<Container>
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="800" className="choiceButton p800">
								{/* <img src={originalImg.src} width="50" /> */}
								Portrait | 800 pixels
							</button>
						</a>
					</Container>
				)}
				<br />
				{originalImg && (
					<Container>
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="400" className="choiceButton p400">
								{/* <img src={originalImg.src} width="50" /> */}
								Portrait | 400 pixels
							</button>
						</a>
					</Container>
				)}
				<br />
				{originalImg && (
					<Container>
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="80" className="choiceButton p80">
								{/* <img src={originalImg.src} width="50" /> */}
								Portrait Miniature | 80 pixels
							</button>
						</a>
					</Container>
				)}
			</Container>
		);
	};

	return (
		<>
			<Header />
			<div className="app-container">
				<LandscapeChoice />
				{/*<PortraitChoice />*/}

				<Container>
					<input
						className="user-file"
						type="file"
						ref={fileInput}
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</Container>

				{modifiedImg && (
					<Container>
						<img id="resizedImg" src={modifiedImg.src} />
					</Container>
				)}

				{originalImg && (
					<Container>
						<img
							className="originalImg"
							id="originalImg"
							src={originalImg.src}
						/>
						<img
							src={originalImg.src}
							style={{ display: "none" }}
							onLoad={(e) => {}}
							ref={originalImgRef}
						/>
						<Container>
							<Container>
								Original Image Size (MB): <b>{originalImg.originalSizeMB}</b>
							</Container>
							<Container>
								Original Image Size (KB): <b>{originalImg.originalSizeKB}</b>
							</Container>
						</Container>
					</Container>
				)}
			</div>
		</>
	);
};

export default App;
