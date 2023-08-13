import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    const { t } = useTranslation();
    return (

        <Routes>
            {Object.values(routeConfig).map((it, index) => (
                <Route
                    key={index}
                    path={it.path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {it.element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>

    );
};
