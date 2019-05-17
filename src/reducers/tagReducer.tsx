import { ADD_TAG } from "../actions/addTag";
import { DELETE_TAG } from '../actions/deleteTag';
import { ADD_NEW_TAG } from '../actions/addNewTag';
import { MAP_TAG_ARRAY } from "../actions/mapTagArray";
import { LOAD_TAGS } from "../actions/loadTags";

export const initialState = {
    tags: Array(0),
    tagsAddForm: Array(0),
}
export const tagReducer = function (state = initialState, action) {
    switch (action.type) {
        case LOAD_TAGS: {
            let tags = action.payload;

            if (tags === undefined) {
                tags = [];
            }

            return {
                ...state,
                tags
            };
        }
        case ADD_TAG: {
            let { id } = action.payload;
            let items = [...state.tagsAddForm];

            if (id === -1) {
                id = state.tags.length - 1;
            }

            items.push(id);

            return {
                ...state,
                tagsAddForm: items
            };
        }
        case DELETE_TAG: {
            let { id } = action.payload;
            let items = [...state.tagsAddForm];
            items.splice(id, 1);

            return {
                ...state,
                tagsAddForm: items
            };
        }
        case ADD_NEW_TAG: {
            let newTag = action.payload;
            let items = [...state.tags];
            items.push(newTag);

            return {
                ...state,
                tags: items
            };
        }
        case MAP_TAG_ARRAY: {
            let { tagArray } = action.payload;

            return {
                ...state,
                tagsAddForm: tagArray
            };
        }
    }
    return state;
}
