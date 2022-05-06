import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Choice from "../components/Choice";
import GegeFileInput from "../components/GegeFileInput";
import Home from "../components/Home";
import Help from "../components/templates/Help";

const RouterBasic = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/gege" element={<GegeFileInput />} />
        <Route exact path="/" element={<App />}>
          <Route path="home" element={<Home />} />

          <Route path="choice" element={<Choice />} />

          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterBasic;
