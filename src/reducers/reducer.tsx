
import bookMarks from '../data/bookMarks';
import tags from '../data/tags';

import IAction from "../actions/action";
import { ADD_BOOKMARK } from "../actions/addBookmark";
import { DELETE_BOOKMARK } from "../actions/deleteBookmark";

const initialState = {
    bookMarks,
    tags
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
        items.splice(id,1);

        return {...state,
            bookMarks: items
        };
    }
  }
  return state;
}

export default reducer;