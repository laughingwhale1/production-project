import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
    const { t } = useTranslation();
    return (

        <Suspense fallback={<div>{t('Загрузка...')}</div>}>
            <Routes>
                {Object.values(routeConfig).map((it, index) => (
                    <Route
                        key={index}
                        path={it.path}
                        element={(
                            <div className="page-wrapper">
                                {it.element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>

    );
};
