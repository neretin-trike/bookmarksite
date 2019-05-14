
// import bookMarks from '../data/bookMarks';
// import tags from '../data/tags';

import { ADD_BOOKMARK } from "../actions/addBookmark";
import { DELETE_BOOKMARK } from "../actions/deleteBookmark";
import { SEARCH_BOOKMARK } from "../actions/searchBookmark";
import { CHANGE_ADDFORM_VALUE } from "../actions/changeAddFormValue";
import { ADD_TAG } from "../actions/addTag";
import { DELETE_TAG } from '../actions/deleteTag';
import { ADD_NEW_TAG } from '../actions/addNewTag';
import { EDIT_BOOKMARK } from '../actions/editBookmark';
import { SET_MODALWINDOW_STATE } from '../actions/setModalWindowState';
import { SAVE_BOOKMARK } from '../actions/saveBookmark';
import { ACCESS_SAVE_BOOKMARK } from "../actions/accessSaveBookmark";
import { VALIDEATE_FIELD } from "../actions/validateField";

import { loadFromLocalStorage } from "../localStorage";

const bookMarks = loadFromLocalStorage("bookmarkList"); 
const tags = loadFromLocalStorage("tagList");

const initialState = {
    bookMarks,
    tags,
    searchFieldValue: "",
    isModalWindowShow: false,
    addFormTitle: "Добавление новой закладки",
    addFormValues: {
        id: null,
        caption: "",
        url: "",
        tag: "",
    },
    tagsAddForm: Array(0),
    addFormSaveButton: true,
    validationErrors: {},
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK: {
        let newAddFormValues = {
            id: null,
            caption: "", 
            url: "", 
            tag: ""
        };
        let newTagsAddForm = []; 

        return {...state,
            addFormValues: newAddFormValues,
            tagsAddForm: newTagsAddForm
        };
    }
    case EDIT_BOOKMARK: {
        let {id} = action.payload;
        let {caption, url, tagArray} = state.bookMarks[id];

        let newAddFormValues = {id, caption, url, tag: "" };
        let newTagsAddForm = tagArray;

        return {...state,
            addFormValues: newAddFormValues,
            tagsAddForm: newTagsAddForm
        };
    }
    case SAVE_BOOKMARK: {
        let newBookmark = action.payload;
        let items = [...state.bookMarks];

        let currentID = state.addFormValues.id; // ToDo: придумать способ получше
        if (currentID === null) {
            items.unshift(newBookmark);
        } else {
            items[currentID] = newBookmark
        }
        
        return {...state,
            bookMarks: items
        };
    }
    case DELETE_BOOKMARK: {
        let {id} = action.payload;
        let items = [...state.bookMarks];
        items.splice(id, 1);

        return {...state,
            bookMarks: items
        };
    }
    case SEARCH_BOOKMARK: {
        let {value} = action.payload;
        return {...state,
            searchFieldValue: value,
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
    case ADD_TAG: {
        let {id} = action.payload;
        let items = [...state.tagsAddForm];

        if (id === -1) {
            id = state.tags.length-1;
        }

        items.push(id);

        return {...state,
            tagsAddForm: items
        };
    }
    case DELETE_TAG: {
        let {id} = action.payload;
        let items = [...state.tagsAddForm];
        items.splice(id, 1);

        return {...state,
            tagsAddForm: items
        };
    }
    case ADD_NEW_TAG: {
        let newTag = action.payload;
        let items = [...state.tags];
        items.push(newTag);

        return {...state,
            tags: items
        };
    }
    case SET_MODALWINDOW_STATE: {
        let {isModalWindowShow, addFormTitle} = action.payload;

        return {...state,
            isModalWindowShow,
            addFormTitle
        };
    }
    case ACCESS_SAVE_BOOKMARK: {
        let {disabled} = action.payload;

        return {...state,
            addFormSaveButton: disabled
        };
    }
    case VALIDEATE_FIELD: {
        let {message, name} = action.payload;

        let items = {...state.validationErrors};
        items[name] = message;

        console.log(items);

        return {...state,
            validationErrors: items
        };
    }
  }
  return state;
}

export default reducer;