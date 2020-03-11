import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILED,
    UPDATE_ROOT_STATE,
    RESET_DEFAULT_FORM_DATA
} from './../actions';

const initialState = {
    isFetching: false,
    smurfs: [],
    error: '',
    defaultFormData: {
        name: '',
        age: '',
        height: ''
    }
}

export const rootReducer = (state = initialState, action) => {
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
        case UPDATE_ROOT_STATE:
            return {
                ...state,
                [action.key]: action.payload
            }
        case RESET_DEFAULT_FORM_DATA:
            return {
                ...state,
                defaultFormData: {name: '', age: '', height: ''}
            }
        default:
            return state;
    }
}