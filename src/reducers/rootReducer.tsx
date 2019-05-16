import { combineReducers } from "redux";

import { bookmarkReducer } from "./bookmarkReducer";
import { tagReducer } from "./tagReducer";
import { modalWindowReducer } from "./modalWindowReducer";

export const rootReducer = combineReducers({
    bookmarkState: bookmarkReducer,
    tagState: tagReducer,
    modalWindowState: modalWindowReducer
});
