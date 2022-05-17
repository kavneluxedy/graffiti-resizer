import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Help from "../components/Help";

const RouterBasic = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="app" element={<App />} />
        <Route path="help" element={<Help />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterBasic;
