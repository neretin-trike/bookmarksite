import { bookmarkReducer, initialState } from '../../src/reducers/bookmarkReducer'

describe('### Bookmark reducer tests ###', () => { 
  
  it('Test LOAD_BOOKMARKS action for undefined', () => { 
    const action = {
      type: "LOAD_BOOKMARKS",
      payload: {
        bookMarks: undefined
      }
    }
    const expectedState = {
      ...initialState,
      bookMarks: action.payload
    }
    expect(bookmarkReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test SAVE_BOOKMARK action for any data', () => { 
    const action = {
      type: "SAVE_BOOKMARK",
      payload: {
        id: 0,
        bookmark: {
          faviconPath: "http://",
          caption: "Название",
          url: "https://",
          createDate: "12:02 12.12.2019",
          tagArray: [0,1,2]
        }
      }
    }
    const expectedState = {
      ...initialState,
      bookMarks: [action.payload.bookmark]
    }
    expect(bookmarkReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test DELETE_BOOKMARK action for any id', () => { 
    const action = {
      type: "DELETE_BOOKMARK",
      payload: {
        id: 0
      }
    }
    const expectedState = {
      ...initialState,
      bookMarks: []
    }
    expect(bookmarkReducer(initialState, action)).toEqual(expectedState)
  });

  it('Test SEARCH_BOOKMARK action for not modified input', () => { 
    const action = {
      type: "SEARCH_BOOKMARK",
      payload: {
        value: "Любое значение"
      }
    }
    const expectedState = {
      ...initialState,
      searchFieldValue: "Любое значение"
    }
    expect(bookmarkReducer(initialState, action)).toEqual(expectedState)
  });
})