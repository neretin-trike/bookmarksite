import IAction from "./action";

export const DELETE_TAG = "DELETE_TAG";
export type DELETE_TAG = {
    id: number
}

export function doDeleteTag(data: DELETE_TAG): IAction<DELETE_TAG> {
    return {
        type: DELETE_TAG,
        payload: data
    }
}