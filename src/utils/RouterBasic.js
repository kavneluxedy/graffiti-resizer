import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App.js";
import Home from "../components/Home.js";
import Help from "../components/Help.js";
import Header from "../components/templates/Header.js";
import Resize from "../components/Resize.js";

const RouterBasic = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="home" element={<Home />} />
				<Route path="app" element={<App />} />
				<Route path="resize" element={<Resize />} />
				<Route path="help" element={<Help />} />
				<Route path="head" element={<Header />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterBasic;
