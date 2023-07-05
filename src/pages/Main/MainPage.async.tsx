import React from "react";

export const MainPageAsync = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        // @ts-ignore
        // ТАК ДЕЛАЕМ ТОК НА КУРСЕ, В ПРОДЕ НЕ ДЕЛАЕМ ТАК НИКОГДА
        resolve(import('./MainPage'))
    }, 1500)
}));