import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";


export const AppRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map((it, index) => (
                    <Route key={index} path={it.path} element={(
                        <div className="page-wrapper">
                            {it.element}
                        </div>
                    )} />
                ))}
            </Routes>
        </Suspense>

    )
}