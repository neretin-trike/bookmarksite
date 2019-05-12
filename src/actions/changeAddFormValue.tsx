import IAction from "./action";

export const CHANGE_ADDFORM_VALUE = "CHANGE_ADDFORM_VALUE";
export type CHANGE_ADDFORM_VALUE = {
    name: string,
    value: string
}

export function doChangeAddFormValue(data: CHANGE_ADDFORM_VALUE): IAction<CHANGE_ADDFORM_VALUE> {
    return {
        type: CHANGE_ADDFORM_VALUE,
        payload: data
    }
}