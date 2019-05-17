import { useState, useEffect } from 'react';

// странный хук для запуска анимации при рендере с поомщью добавления класса
export const useAnimation = (themeName) => {

    let [theme, setTheme] = useState("");

    useEffect(() => {
        if (theme === "") {
            setTheme(themeName);
        } else {
            setTheme("");
        }
    }, [])

    return theme;
}