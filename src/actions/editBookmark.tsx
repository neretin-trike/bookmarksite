import IAction from "./action";

export const EDIT_BOOKMARK = "EDIT_BOOKMARK";
export type EDIT_BOOKMARK = {
    id: number,
    bookmark: {
        faviconPath?: string,
        createDate?: string,
        caption: string,
        url: string,
        tagArray: Array<any>
    }
}

export function doEditBookmark(data: EDIT_BOOKMARK): IAction<EDIT_BOOKMARK> {
    return {
        type: EDIT_BOOKMARK,
        payload: data
    }
}