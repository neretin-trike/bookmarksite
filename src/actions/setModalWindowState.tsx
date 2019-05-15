import IAction from "./action";

export const SET_MODALWINDOW_STATE = "SET_MODALWINDOW_STATE";
export type SET_MODALWINDOW_STATE = {
    isModalWindowShow: boolean,
    addFormTitle: string
}

export function doSetModalWindowState(data: SET_MODALWINDOW_STATE): IAction<SET_MODALWINDOW_STATE> {
    return {
        type: SET_MODALWINDOW_STATE,
        payload: data
    }
}