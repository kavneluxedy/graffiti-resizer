import AppStyleSheet from "./App.css";
import MenuStyleSheet from "./Menu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/templates/Header.js";
import Resize from "./components/Resize.js";
import useOriginal from "./hooks/useOriginal.js";
import useResize from "./hooks/useResize.js";

const App = () => {
	const { file, setFile, originalImg, loading } = useOriginal();
	const { modifiedImg, fileInput } = useResize();
	const [resizeFlag, setResizeFlag] = useState(false);

	const fileChangedHandler = (e) => {
		if (e.target.files[0]) {
			localStorage.setItem("fileInput", e.target.files[0]);
			setTimeout(setFile(e.target.files[0]), 500);
			setResizeFlag(true);
		} else {
			setResizeFlag(false);
		}
	};

	return (
		<div>
			<Header />

			{loading && (
				<div className="loading">
					<span>
						{loading}
						{/* LOADING ... */}
					</span>
				</div>
			)}

			{!resizeFlag && (
				<div className="container">
					<div className="container">
						<div className="sub-container">
							<h3>Bienvenue sur GraffitiResize !</h3>
							<p>
								Cette application de bureau vous permet de redimensionner
								simplement toutes vos photos pour vos projets web !
							</p>
							<button className="help-button">
								<Link to="/help">En savoir plus sur cette app</Link>
							</button>
						</div>

						<div className="sub-container">
							<label htmlFor="user-file">
								<div className="user-file">
									<input
										type="file"
										ref={fileInput}
										name="user-file"
										onChange={(e) => fileChangedHandler(e)}
									/>
								</div>
							</label>
						</div>
					</div>
				</div>
			)}

			{resizeFlag && originalImg && (
				<div className="container">
					<Resize
						file={file}
						originalImg={originalImg}
						modifiedImg={modifiedImg}
						fileInput={fileInput}
					/>
				</div>
			)}
		</div>
	);
};

export default App;
