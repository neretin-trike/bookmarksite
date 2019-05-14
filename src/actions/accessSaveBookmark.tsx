import IAction from "./action";

export const ACCESS_SAVE_BOOKMARK = "ACCESS_SAVE_BOOKMARK";
export type ACCESS_SAVE_BOOKMARK = {
    disabled: boolean,
}

export function doAccessSaveBookmark(data: ACCESS_SAVE_BOOKMARK): IAction<ACCESS_SAVE_BOOKMARK> {
    return {
        type: ACCESS_SAVE_BOOKMARK,
        payload: data
    }
}