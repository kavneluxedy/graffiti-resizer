import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";

const RouterBasic = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="app" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterBasic;
