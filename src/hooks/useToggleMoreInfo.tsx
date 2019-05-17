import { useState } from "react";

// хук для отображения подробной информации о закладке
export const useToggleMoreInfo = (nameStateClose, nameStateOpen) => {
    const condition = [nameStateClose, nameStateOpen];

    const [isShow, setShow] = useState(0);
    const [name, setName] = useState(condition[1]);

    const clickHandle = () => {
        setShow(isShow ? 0 : 1);      // переключатель между индексами
        setName(condition[isShow]);   // название кнопки в зависимости от текущего индекса
    }
    return {isShow, name, clickHandle};
}