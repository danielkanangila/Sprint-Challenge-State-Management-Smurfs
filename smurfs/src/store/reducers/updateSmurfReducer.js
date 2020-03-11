import {
    EDIT_SMURF
} from './../actions';

const initialState = {
    isPosting: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_SMURF: 
            return {
                ...state,
                [state.root.defaultFormData]: action.payload
            }
        default:
            return state;
    }
}