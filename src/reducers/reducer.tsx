
import bookMarks from '../data/bookMarks';
import tags from '../data/tags';

import IAction from "../actions/action";
import { ADD_BOOKMARK } from "../actions/addBookmark";
import { DELETE_BOOKMARK } from "../actions/deleteBookmark";
import { SEARCH_BOOKMARK } from "../actions/searchBookmark";


const initialState = {
    bookMarks,
    tags,
    searchFieldValue: "",
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
  }
  return state;
}

export default reducer;