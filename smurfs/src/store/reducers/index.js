import { combineReducers } from 'redux';
import { rootReducer } from './rootReducer';
import { addSmurfReducer } from './addSmurfReducer';

export const reducer = combineReducers({
    root: rootReducer,
    add: addSmurfReducer
});