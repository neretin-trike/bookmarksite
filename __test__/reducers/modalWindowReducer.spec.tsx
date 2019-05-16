import { modalWindowReducer, initialState } from '../../src/reducers/modalWindowReducer'

describe('### ModalWindow reducer tests ###', () => { 
  
  it('Test ADD_BOOKMARK action', () => { 
    const action = {
      type: "ADD_BOOKMARK",
      payload: {}
    }
    let newAddFormValues = {
      id: null,
      caption: "", 
      url: "", 
      tag: ""
    };
    const expectedState = {
      ...initialState,
      addFormValues: newAddFormValues
    }
    expect(modalWindowReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test EDIT_BOOKMARK action for correct data', () => { 
    const action = {
      type: "EDIT_BOOKMARK",
      payload: {
        id: 0,
        bookmark: {
            caption: "Название",
            url: "http://",
            tagArray: []
        }
      }
    }

    let {id, bookmark} = action.payload;
    let {caption, url} = bookmark;
    let newAddFormValues = {id, caption, url, tag: "" };

    let newValidationErrors = {
      caption: "",
      url: "",
      tag: "",
    }

    const expectedState = {
      ...initialState,
      addFormValues: newAddFormValues,
      validationErrors: newValidationErrors
    }
    expect(modalWindowReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test SET_MODALWINDOW_STATE action for correct data', () => { 
    const action = {
      type: "SET_MODALWINDOW_STATE",
      payload: {
        isModalWindowShow: true,
        addFormTitle: "Редактирование закладки"
      }
    }
    
    let validationErrors = {
      caption: "error",
      url: "error",
      tag: "error",
    }

    const expectedState = {
      ...initialState,
      isModalWindowShow: action.payload.isModalWindowShow,
      addFormTitle: action.payload.addFormTitle,
      validationErrors,
      addFormSaveButton: true,
    }
    expect(modalWindowReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test CHANGE_ADDFORM_VALUE action for check field accordance', () => { 
    const action = {
      type: "CHANGE_ADDFORM_VALUE",
      payload: {
        name: "caption",
        value: "Название закладки"
      }
    }

    let items = {
      id: null,
      caption: "Название закладки",
      url: "",
      tag: "",
    }

    const expectedState = {
      ...initialState,
      addFormValues:items,
    }
    expect(modalWindowReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test ACCESS_SAVE_BOOKMARK action for check value not replaced', () => { 
    const action = {
      type: "ACCESS_SAVE_BOOKMARK",
      payload: {
        disabled: true,
      }
    }

    const expectedState = {
      ...initialState,
      addFormSaveButton: action.payload.disabled
    }
    expect(modalWindowReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test VALIDEATE_FIELD action for correct values', () => { 
    const action = {
      type: "VALIDEATE_FIELD",
      payload: {
        data: {},
      }
    }
    const expectedState = {
      ...initialState,
      validationErrors: action.payload
    }
    expect(modalWindowReducer(initialState, action)).toEqual(expectedState)
  });
})