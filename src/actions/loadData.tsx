import IAction from "./action";

export const LOAD_DATA = "LOAD_DATA";
export type LOAD_DATA = {
    bookMarks: [],
    tags:[]
}

export function doLoadData(data: LOAD_DATA): IAction<LOAD_DATA> {
    return {
        type: LOAD_DATA,
        payload: data
    }
}