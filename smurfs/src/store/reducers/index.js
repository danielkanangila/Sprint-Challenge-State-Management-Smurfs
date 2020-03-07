import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILED
} from './../actions';

const initialState = {
    isFetching: false,
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
        default:
            return state;
    }
}