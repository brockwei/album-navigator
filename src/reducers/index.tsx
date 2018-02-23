import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { albumData, updateId } from './data';
import { updatePage } from './pagination';
import { updateUserid } from './user';
import { updateCrud, updateTitle } from './crud';

const reducers = combineReducers({
    albumData,
    updateId,
    updatePage,
    updateUserid,
    updateCrud,
    updateTitle
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;