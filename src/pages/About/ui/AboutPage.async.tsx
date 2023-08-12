import React from 'react';

export const AboutPageAsync = React.lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        // ТАК ДЕЛАЕМ ТОК НА КУРСЕ, В ПРОДЕ НЕ ДЕЛАЕМ ТАК НИКОГДА
        resolve(import('./AboutPage'));
    }, 1500);
}));
