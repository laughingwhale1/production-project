import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/Main";
import {AboutPage} from "pages/About";
import React, {Suspense} from "react";
import {routeConfig, showMe} from "shared/config/routeConfig/routeConfig";


export const AppRouter = () => {
    showMe()
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/*<Route element={<MainPage/>} path={'/'}/>
                <Route element={<AboutPage/>} path={'/about'}/>*/}
                {Object.values(routeConfig).map((it, index) => (
                    <Route key={index} path={it.path} element={it.element} />
                ))}
            </Routes>
        </Suspense>

    )
}