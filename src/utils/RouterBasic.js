import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import FormatChoice from '../components/FormatChoice';
import Home from '../components/Home';
import Help from '../components/templates/Help';

const RouterBasic = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} >
                    <Route path="choice" element={<FormatChoice />} />
                    <Route path="app" element={<App />} />
                    <Route path="home" element={<Home />} />
                    <Route path="help" element={<Help />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterBasic;