import IAction from "./action";
export const ADD_BOOKMARK = "ADD_BOOKMARK";
export type ADD_BOOKMARK = {
    faviconPath: string,
    caption: string,
    url: string,
    createDate: string,
    tagArray: Array<any>
}

export function doAddBookmark(data: ADD_BOOKMARK): IAction<ADD_BOOKMARK> {
    return {
        type: ADD_BOOKMARK,
        payload: data
    }
}