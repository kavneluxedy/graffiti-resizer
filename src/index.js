import RouterBasic from "./utils/RouterBasic";
import { StrictMode } from "react";

const ReactDOM = require("react-dom/client");

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
	<StrictMode>
		<RouterBasic />
	</StrictMode>
);
