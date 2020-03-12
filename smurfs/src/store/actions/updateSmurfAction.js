import axios from 'axios';
import { BASE_URL, UPDATE_ROOT_STATE, updateRootStateWithSuccess, updateRootStateWithError } from './';

export const EDIT_SMURF = 'EDIT_SMURF';
export const UPDATING_START = 'UPDATING_START';
export const UPDATING_SUCCESS = 'UPDATING_SUCCESS';
export const UPDATING_FAILED = 'UPDATING_FAILED';

export const editSmurf = data => dispatch => {
    dispatch({
        type: UPDATE_ROOT_STATE,
        key: 'defaultFormData',
        payload: data
    });
}

export const updateSmurf = data => dispatch => {
    dispatch({type: UPDATING_START});
    dispatch({type: UPDATE_ROOT_STATE, key: 'error', payload: ''});
    axios.put(`${BASE_URL}/${data.id}`, data)
    .then(res => {
        dispatch({type: UPDATING_SUCCESS});
        updateRootStateWithSuccess(dispatch, 'smurfs', res.data);
    })
    .catch(err => {
        dispatch({type: UPDATING_FAILED});
        updateRootStateWithError(dispatch, err);
    })

}