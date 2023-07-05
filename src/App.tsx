import React, {Suspense, useContext, useState} from 'react';
import Counter from "./components/Counter";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/Main/MainPage.async";
import {AboutPageAsync} from "./pages/About/AboutPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<MainPageAsync/>} path={'/'}/>
                    <Route element={<AboutPageAsync/>} path={'/about'}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
