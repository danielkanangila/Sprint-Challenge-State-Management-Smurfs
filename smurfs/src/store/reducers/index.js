import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILED,
    POSTING_START,
    POSTING_SUCCESS,
    POSTING_FAILED
} from './../actions';

const initialState = {
    isFetching: false,
    isPosting: false,
    smurfs: [],
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            };
        case FETCHING_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case POSTING_START:
            return {
                ...state,
                isPosting: true,
                error: ''
            };
        case POSTING_SUCCESS:
            return {
                ...state,
                isPosting: false,
                error: '',
                smurfs: action.payload
            };
        case POSTING_FAILED:
            return {
                ...state,
                isPosting: false,
                error: action.payload,
            };
        default:
            return state;
    }
}