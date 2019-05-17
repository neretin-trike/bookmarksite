import { DELETE_BOOKMARK } from "../actions/deleteBookmark";
import { SAVE_BOOKMARK } from '../actions/saveBookmark';
import { SEARCH_BOOKMARK } from "../actions/searchBookmark";
import { LOAD_BOOKMARKS } from "../actions/loadBookmarks";

export const initialState = {
    bookMarks: Array(0),
    searchFieldValue: "",
}
export const bookmarkReducer = function (state = initialState, action) {
    switch (action.type) {
        case LOAD_BOOKMARKS: {
            let bookMarks = action.payload;

            if (bookMarks === undefined) {
                bookMarks = [];
            }

            return {
                ...state,
                bookMarks
            };
        }
        case SAVE_BOOKMARK: {
            let { bookmark, id } = action.payload;
            let items = [...state.bookMarks];

            let currentID = id;
            if (currentID === null) {
                items.unshift(bookmark);
            } else {
                items[currentID] = bookmark
            }

            return {
                ...state,
                bookMarks: items
            };
        }
        case DELETE_BOOKMARK: {
            let { id } = action.payload;
            let items = [...state.bookMarks];
            items.splice(id, 1);

            return {
                ...state,
                bookMarks: items
            };
        }
        case SEARCH_BOOKMARK: {
            let { value } = action.payload;
            return {
                ...state,
                searchFieldValue: value,
            };
        }
    }
    return state;
}
