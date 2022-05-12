// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { StrictMode, useEffect, useLayoutEffect } from "react";
import useOriginal from "./hooks/useOriginal";
import useResize from "./hooks/useResize";
import useDownload from "./hooks/useDownload";
import Header from "./components/templates/Header";

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
			<div className="container">
				{originalImg && (
					<div className="choice" value="landscape1920">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1920" className="choiceButton">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 1920 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="choice">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1600" className="choiceButton l1600">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 1600 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1200" className="choiceButton l1200">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 1200 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="800" className="choiceButton l800">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 800 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="400" className="choiceButton l400">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage | 400 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="80" className="choiceButton l80">
								{/* <img src={originalImg.src} width="50" /> */}
								Paysage Miniature | 80 pixels
							</button>
						</a>
					</div>
				)}
			</div>
		);
	};

	const PortraitChoice = () => {
		return (
			<div className="container">
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1080" className="choiceButton p1080">
								{/* <img src={originalImg.src} width="50" /> */}
								Portrait | 1080 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="800" className="choiceButton p800">
								{/* <img src={originalImg.src} width="50" /> */}
								Portrait | 800 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="400" className="choiceButton p400">
								{/* <img src={originalImg.src} width="50" /> */}
								Portrait | 400 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="80" className="choiceButton p80">
								{/* <img src={originalImg.src} width="50" /> */}
								Portrait Miniature | 80 pixels
							</button>
						</a>
					</div>
				)}
			</div>
		);
	};

	const SquareChoice = () => {
		return (
			<div className="container">
				{originalImg && (
					<div className="choice">
						<a
							href="#"
							onClick={(e) => onClick(e.target.attributes[0].textContent)}
						>
							<button value="1600" className="choiceButton">
								{/* <img src={originalImg.src} width="50" /> */}
								Square | 1600 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="1200" className="choiceButton">
								{/* <img src={originalImg.src} width="50" /> */}
								Square | 1200 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="800" className="choiceButton">
								{/* <img src={originalImg.src} width="50" /> */}
								Square | 800 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="400" className="choiceButton">
								{/* <img src={originalImg.src} width="50" /> */}
								Square | 400 pixels
							</button>
						</a>
					</div>
				)}
				<br />
				{originalImg && (
					<div className="container">
						<a href="#" onClick={(e) => onClick(e.target.attributes[0].value)}>
							<button value="80" className="choiceButton">
								{/* <img src={originalImg.src} width="50" /> */}
								Square Miniature | 80 pixels
							</button>
						</a>
					</div>
				)}
			</div>
		);
	};

	return (
		<StrictMode>
			<Header />
			<div className="container">
				<LandscapeChoice />
				<PortraitChoice />
				{/* <SquareChoice /> */}

				<div className="container">
					<input
						type="file"
						ref={fileInput}
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</div>

				{loading && (
					<div className="container">
						<span className="loadingAnimation">Loading ...</span>
					</div>
				)}

				{error && <span>Error</span>}

				{modifiedImg && (
					<div className="container">
						<img id="resizedImg" src={modifiedImg.src} />
					</div>
				)}

				<br />

				{originalImg && (
					<div className="container">
						<img
							className="originalImg"
							id="originalImg"
							src={originalImg.src}
						/>
						<img
							src={originalImg.src}
							// style={{ display: "none" }} // ! TEST
							onLoad={(e) => {}}
							ref={originalImgRef}
						/>
						<div>
							<div className="container">
								Original Image Size (MB): <b>{originalImg.originalSizeMB}</b>
							</div>
							<div className="container">
								Original Image Size (KB): <b>{originalImg.originalSizeKB}</b>
							</div>
						</div>
					</div>
				)}
			</div>
		</StrictMode>
	);
};

export default App;
