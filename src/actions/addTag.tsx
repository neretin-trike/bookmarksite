import IAction from "./action";

export const ADD_TAG = "ADD_TAG";
export type ADD_TAG = {
    id: number
}

export function doAddTag(data: ADD_TAG): IAction<ADD_TAG> {
    return {
        type: ADD_TAG,
        payload: data
    }
}