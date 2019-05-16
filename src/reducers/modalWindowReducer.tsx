import { ADD_BOOKMARK } from "../actions/addBookmark";
import { EDIT_BOOKMARK } from '../actions/editBookmark';
import { CHANGE_ADDFORM_VALUE } from "../actions/changeAddFormValue";
import { SET_MODALWINDOW_STATE } from '../actions/setModalWindowState';
import { ACCESS_SAVE_BOOKMARK } from "../actions/accessSaveBookmark";
import { VALIDEATE_FIELD } from "../actions/validateField";

export const initialState = {
    isModalWindowShow: false,
    addFormTitle: "Добавление новой закладки",
    addFormValues: {
        id: null,
        caption: "",
        url: "",
        tag: "",
    },
    addFormSaveButton: true,
    validationErrors: {},
}

export const modalWindowReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_BOOKMARK: {
            let newAddFormValues = {
                id: null,
                caption: "", 
                url: "", 
                tag: ""
            };
    
            return {...state,
                addFormValues: newAddFormValues,
            };
        }
        case EDIT_BOOKMARK: {

            let {id, bookmark} = action.payload;
            let {caption, url} = bookmark;
    
            let newAddFormValues = {id, caption, url, tag: "" };
    
            let newValidationErrors = {
                caption: "",
                url: "",
                tag: "",
            }
    
            return {...state,
                addFormValues: newAddFormValues,
                validationErrors: newValidationErrors
            };
        }
        case SET_MODALWINDOW_STATE: {
            let {isModalWindowShow, addFormTitle} = action.payload;
            let validationErrors = {
                caption: "error",
                url: "error",
                tag: "error",
            }
    
            return {...state,
                isModalWindowShow,
                addFormTitle,
                validationErrors,
                addFormSaveButton: true,
            };
        }
        case CHANGE_ADDFORM_VALUE: {
            let items = {...state.addFormValues};
            let {value, name} = action.payload;
            items[name] = value;

            return {...state, 
                addFormValues: items,
            };
        }
        case ACCESS_SAVE_BOOKMARK: {
            let {disabled} = action.payload;
    
            return {...state,
                addFormSaveButton: disabled
            };
        }
        case VALIDEATE_FIELD: {
            let data = action.payload;
            return {...state,
                validationErrors: data
            };
        }
    }
    return state; 
}
