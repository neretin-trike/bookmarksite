import IAction from "./action";

export const VALIDEATE_FIELD = "VALIDEATE_FIELD";
export type VALIDEATE_FIELD = {
   data: object
}

export function doValidateField(data: VALIDEATE_FIELD): IAction<VALIDEATE_FIELD> {
    return {
        type: VALIDEATE_FIELD,
        payload: data
    }
}