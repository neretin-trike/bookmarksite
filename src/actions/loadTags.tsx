import IAction from "./action";

export const LOAD_TAGS = "LOAD_TAGS";
export type LOAD_TAGS = {
    tags:[]
}

export function doLoadTags(data: LOAD_TAGS): IAction<LOAD_TAGS> {
    return {
        type: LOAD_TAGS,
        payload: data
    }
}