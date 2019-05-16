import { tagReducer, initialState } from '../../src/reducers/tagReducer'

describe('### Tag reducer tests ###', () => { 
  
  it('Test LOAD_TAGS action for undefined', () => { 
    const action = {
      type: "LOAD_TAGS",
      payload: {
        tags: undefined
      }
    }
    const expectedState = {
      ...initialState,
      tags: action.payload
    }
    expect(tagReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test ADD_TAG action for any id', () => { 
    const action = {
      type: "ADD_TAG",
      payload: {
        id: -1,
      }
    }
    const expectedState = {
      ...initialState,
      tagsAddForm: [action.payload.id]
    }
    expect(tagReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test DELETE_TAG action for negative id', () => { 
    const action = {
      type: "DELETE_TAG",
      payload: {
        id: -1,
      }
    }
    const expectedState = {
      ...initialState,
      tagsAddForm: []
    }
    expect(tagReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test ADD_NEW_TAG action for correct payload', () => { 
    const action = {
      type: "ADD_NEW_TAG",
      payload: {
        name: "НазваниеТега",
        color: {
            red: 255,
            green: 255,
            blue: 255
          },
      }
    }
    const expectedState = {
      ...initialState,
      tags: [action.payload]
    }
    expect(tagReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test MAP_TAG_ARRAY action for correct payload', () => { 
    const action = {
      type: "MAP_TAG_ARRAY",
      payload: {
        tagArray: [1,2,3,4]
      }
    }
    const expectedState = {
      ...initialState,
      tagsAddForm: [1,2,3,4]
    }
    expect(tagReducer(initialState, action)).toEqual(expectedState)
  });

})