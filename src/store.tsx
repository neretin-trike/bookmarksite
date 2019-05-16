import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';
import { saveToLocaleStorage } from './localStorage';

const persistLocalStorage = store => next => action => {
    let result = next(action);

    let timeoutId = setTimeout( // тормозилка для того, чтобы операция JSON.stringify успела завершиться
        () => { 
            let {bookMarks, tags} = store.getState();

            switch (action.type) {
                case "SAVE_BOOKMARK": {
                    saveToLocaleStorage("bookmarkList", bookMarks);
                    saveToLocaleStorage("tagList", tags);

                    break;
                }
                case "DELETE_BOOKMARK": {
                    saveToLocaleStorage("bookmarkList", bookMarks);

                    break;
                }
            }

            clearTimeout(timeoutId);
        }, 1000
      )
    return result;
} 

const store = createStore(reducer, applyMiddleware(persistLocalStorage));

export default store;