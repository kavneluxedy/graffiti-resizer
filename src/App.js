import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { StrictMode } from "react";
import useOriginal from "./hooks/useOriginal";
import useResize from "./hooks/useResize";
import Header from "./components/templates/Header";
import useDownload from "./hooks/useDownload";

const App = () => {
	const { setFile, originalImg } = useOriginal();
	const { setWidth, setHeigth, modifiedImg, loading, error, fileInput } =
		useResize();
	const { downloadHandler } = useDownload();

	downloadHandler();

	const onClick = (width, heigth = "auto") => {
		setWidth(width);
		setHeigth(heigth);
	};

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
					<div className="choice">
						<a
							// ! ATTRIBUTES[0] MUST BE A STRING (Width in pixel)

							href="#"
							onClick={(e) => onClick(e.target.attributes[0].textContent)}
						>
							<button value="1080" className="choiceButton">
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
							<button value="800" className="choiceButton">
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
							<button value="400" className="choiceButton">
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
							<button value="80" className="choiceButton">
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
				<div className="FormatChoice">
					<LandscapeChoice />
					{/* <PortraitChoice />
	<SquareChoice /> */}
				</div>

				<div className="container">
					<input
						onChange={(e) => setFile(e.target.files[0])}
						type="file"
						ref={fileInput}
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
							style={{ width: 500 }}
							id="originalImg"
							src={originalImg.src}
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

				{/* <Download /> */}
			</div>
		</StrictMode>
	);
};

export default App;
