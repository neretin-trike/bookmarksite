import { reducer, initialState } from '../src/reducers/reducer'

import  tags  from '../src/data/tags';
import  bookMarks  from '../src/data/bookMarks';

describe('news reducer', () => { //  describe - группировка для наших тестов новостного редьюсера
  
  it('EDIT_BOOKMARK', () => { // it - блок, конкретного unit-теста 
    const action = {
      type: "EDIT_BOOKMARK",
      payload: {
        id: 0
      }
    }
    initialState.bookMarks = bookMarks;

    let {id} = action.payload;
    let {caption, url, tagArray} = bookMarks[id];
    let newAddFormValues = {id, caption, url, tag: "" };
    let newTagsAddForm = tagArray;

    let newValidationErrors = {
      caption: "",
      url: "",
      tag: "",
    }
    
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      addFormValues: newAddFormValues,
      tagsAddForm: newTagsAddForm,
      validationErrors: newValidationErrors
    })
  })

})