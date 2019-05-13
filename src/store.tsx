import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer';


const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.log(action.type)
    return result
}

const persistLocalStorage = store => next => action => {

    let result = next(action);

    switch (action.type) {
        case "SAVE_BOOKMARK": {
            let {bookMarks, tags} = store.getState();
            window.localStorage.setItem("bookMarkList", JSON.stringify(bookMarks));
            window.localStorage.setItem("tagList", JSON.stringify(tags));
            break;
        }
        case "DELETE_BOOKMARK": {
            let {bookMarks} = store.getState();
            window.localStorage.setItem("bookMarkList", JSON.stringify(bookMarks));
            break;
        }
    }

    return result;
} 


const store = createStore(reducers, applyMiddleware(persistLocalStorage));

export default store;