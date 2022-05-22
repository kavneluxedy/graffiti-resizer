import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Help from "../components/Help";
import Header from "../components/templates/Header";

const RouterBasic = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="home" element={<Home />} />
				<Route path="app" element={<App />} />
				<Route path="help" element={<Help />} />
				<Route path="head" element={<Header />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterBasic;
