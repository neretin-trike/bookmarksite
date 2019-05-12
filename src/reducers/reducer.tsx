
import bookMarks from '../data/bookMarks';
import tags from '../data/tags';

import IAction from "../actions/action";
import { ADD_BOOKMARK } from "../actions/addBookmark";
import { DELETE_BOOKMARK } from "../actions/deleteBookmark";
import { SEARCH_BOOKMARK } from "../actions/searchBookmark";
import { CHANGE_ADDFORM_VALUE } from "../actions/changeAddFormValue";
import { ADD_TAG } from "../actions/addTag";
import { DELETE_TAG } from '../actions/deleteTag';
import { ADD_NEW_TAG } from '../actions/addNewTag';

const initialState = {
    bookMarks,
    tags,
    searchFieldValue: "",
    addFormValues: {
        caption: "1",
        url: "2",
        tag: "3",
    },
    tagsAddForm: [0,1,2]
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK: {
        let newBookmark = action.payload;
        let items = [...state.bookMarks];
        items.unshift(newBookmark);

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
        console.log(items);
        console.log(items.length);
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
  }
  return state;
}

export default reducer;