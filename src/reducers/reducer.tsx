
import bookMarks from '../data/bookMarks';
import tags from '../data/tags';

import IAction from "../actions/action";
import { ADD_BOOKMARK } from "../actions/actions";

const initialState = {
    bookMarks,
    tags
}

const reducer = function(state = initialState, action: IAction<ADD_BOOKMARK>) {
  switch (action.type) {
    case "ADD_BOOKMARK": {
        let newBookmark = action.payload;
        let items = [...state.bookMarks];
        bookMarks.push(newBookmark);
        return {...state,
            bookMarks
        };
    }
  }
  return state;
}

export default reducer;