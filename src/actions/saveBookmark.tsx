import IAction from "./action";

export const SAVE_BOOKMARK = "SAVE_BOOKMARK";
export type SAVE_BOOKMARK = {
    faviconPath: string,
    caption: string,
    url: string,
    createDate: string,
    tagArray: Array<any>
}

export function doSaveBookmark(data: SAVE_BOOKMARK): IAction<SAVE_BOOKMARK> {
    return {
        type: SAVE_BOOKMARK,
        payload: data
    }
}