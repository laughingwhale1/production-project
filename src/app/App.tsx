import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/helpers/classNames";
import {AppRouter} from "app/providers/router";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <AppRouter />
        </div>
    );
};

export default App;
