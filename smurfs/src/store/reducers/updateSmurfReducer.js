import {
    EDIT_SMURF,
    UPDATING_START,
    UPDATING_SUCCESS,
    UPDATING_FAILED
} from './../actions';

const initialState = {
    isUpdating: false,
}

export const updateSmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_SMURF: 
            return {
                ...state,
            };
        case UPDATING_START:
            return {
                ...state,
                isUpdating: true
            };
        case UPDATING_SUCCESS:
            return {
                ...state,
                isUpdating: false
            };
        case UPDATING_FAILED:
            return {
                ...state,
                isUpdating: false
            };
        default:
            return state;
    }
}