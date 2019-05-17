import { loadFromLocalStorage } from "../localStorage";
import { useEffect } from "react";

// хук для загрузки данных из localStorage
export const useLoadData = (props) => {
    useEffect(() => {
        const bookMarks = loadFromLocalStorage("bookmarkList");
        const tags = loadFromLocalStorage("tagList");

        props.loadData({ bookMarks, tags });
    }, [])
}

