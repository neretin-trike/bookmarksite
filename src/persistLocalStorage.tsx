import { saveToLocaleStorage } from './localStorage';

export const persistLocalStorage = store => next => action => {
    let result = next(action);

    let timeoutId = setTimeout( // тормозилка для того, чтобы операция JSON.stringify успела завершиться
        () => { 
            let {bookMarks} = store.getState().bookmarkState;
            let {tags} = store.getState().tagState;

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
