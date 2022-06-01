import RouterBasic from "./utils/RouterBasic";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <RouterBasic />
  </StrictMode>
);