import IAction from "./action";

export const ADD_BOOKMARK = "ADD_BOOKMARK";
export type ADD_BOOKMARK = {}

export function doAddBookmark(data: ADD_BOOKMARK): IAction<ADD_BOOKMARK> {
    return {
        type: ADD_BOOKMARK,
        payload: data
    }
}