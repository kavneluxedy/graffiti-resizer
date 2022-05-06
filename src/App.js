import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { StrictMode, useState } from "react";
import Header from "./components/templates/Header";
import Home from "./components/Home";

const App = () => {
	const [src, setSrc] = useState("URI's src Init");

	const [newWidth, setNewWidth] = useState(500);
	const [size, setSize] = useState("Init Size");

	return (
		<StrictMode>
			<div className="container">
				<Header />
				<Home />
			</div>
		</StrictMode>
	);
};

export default App;
