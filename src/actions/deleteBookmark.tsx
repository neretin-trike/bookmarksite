import IAction from "./action";

export const DELETE_BOOKMARK = "DELETE_BOOKMARK";
export type DELETE_BOOKMARK = {
    id: number,
}

export function doDeleteBookmark(data: DELETE_BOOKMARK): IAction<DELETE_BOOKMARK> {
    return {
        type: DELETE_BOOKMARK,
        payload: data
    }
}