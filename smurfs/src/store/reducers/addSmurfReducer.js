import {
    POSTING_START,
    POSTING_SUCCESS,
    POSTING_FAILED
} from './../actions';

const initialState = {
    isPosting: false,
}

export const addSmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case POSTING_START:
            return {
                ...state,
                isPosting: true,
            };
        case POSTING_SUCCESS:
            return {
                ...state,
                isPosting: false,
            };
        case POSTING_FAILED:
            return {
                ...state,
                isPosting: false,
            };
        default:
            return state;
    }
}