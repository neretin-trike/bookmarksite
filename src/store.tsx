import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './reducers/rootReducer';
import { persistLocalStorage } from './persistLocalStorage';

const store = createStore(rootReducer, applyMiddleware(persistLocalStorage));

export default store;