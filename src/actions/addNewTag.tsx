import IAction from "./action";

export const ADD_NEW_TAG = "ADD_NEW_TAG";
export type ADD_NEW_TAG = {
    name: string,
    color: {
        red: number,
        green: number,
        blue: number
      },
}

export function doAddNewTag(data: ADD_NEW_TAG): IAction<ADD_NEW_TAG> {
    return {
        type: ADD_NEW_TAG,
        payload: data
    }
}