import { combineReducers } from 'redux';
import { rootReducer } from './rootReducer';
import { addSmurfReducer } from './addSmurfReducer';
import { updateSmurfReducer } from './updateSmurfReducer';

export const reducer = combineReducers({
    root: rootReducer,
    add: addSmurfReducer,
    updating: updateSmurfReducer,
});