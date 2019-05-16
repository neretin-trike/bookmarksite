import IAction from "./action";

export const LOAD_BOOKMARKS = "LOAD_BOOKMARKS";
export type LOAD_BOOKMARKS = {
    bookMarks: [],
}

export function doLoadBookmarks(data: LOAD_BOOKMARKS): IAction<LOAD_BOOKMARKS> {
    return {
        type: LOAD_BOOKMARKS,
        payload: data
    }
}