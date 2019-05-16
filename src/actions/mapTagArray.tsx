import IAction from "./action";

export const MAP_TAG_ARRAY = "MAP_TAG_ARRAY";
export type MAP_TAG_ARRAY = {
    tagArray: []
}

export function doMapTagArray(data: MAP_TAG_ARRAY): IAction<MAP_TAG_ARRAY> {
    return {
        type: MAP_TAG_ARRAY,
        payload: data
    }
}