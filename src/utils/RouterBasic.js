import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import FormatChoice from '../components/FormatChoice';
import Home from '../components/Home';
import Help from '../components/templates/Help';
import ImageOptionsContextProvider from '../components/Provider/ImageOptionsContextProvider';
import ImageOptionsContext from '../components/Provider/ImageOptionsContext';
import MyComponent from '../components/Provider/MyComponent';

const RouterBasic = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" children={<ImageOptionsContextProvider><App newWidth={ImageOptionsContext.newWidth}/></ImageOptionsContextProvider>}>
                    <Route path="setup" element={<App />} />
                    <Route path="comp" element={<MyComponent />} />
                    {/* <Route path="app" element={<App />} /> */}
                    <Route path="home" element={<Home />} />
                    <Route path="format" element={<FormatChoice />} />
                    <Route path="help" element={<Help />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterBasic;
