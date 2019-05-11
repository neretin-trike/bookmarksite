import IAction from "./action";

export const SEARCH_BOOKMARK = "SEARCH_BOOKMARK";
export type SEARCH_BOOKMARK = {
    value: string
}

export function doSearchBookmark(data: SEARCH_BOOKMARK): IAction<SEARCH_BOOKMARK> {
    return {
        type: SEARCH_BOOKMARK,
        payload: data
    }
}