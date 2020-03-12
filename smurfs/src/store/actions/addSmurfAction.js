import axios from 'axios';
import { BASE_URL, UPDATE_ROOT_STATE, updateRootStateWithSuccess, updateRootStateWithError } from './';

export const POSTING_START = 'POSTING_START';
export const POSTING_SUCCESS = 'POSTING_SUCCESS';
export const POSTING_FAILED = 'POSTING_FAILED';

export const addSmurf = data => dispatch => {
    dispatch({type: POSTING_START});
    dispatch({type: UPDATE_ROOT_STATE, key: 'error', payload: ''});
    axios.post(BASE_URL, data)
    .then(res => {
        dispatch({type: POSTING_SUCCESS, payload: res.data})
        updateRootStateWithSuccess(dispatch, 'smurfs', res.data);
    })
    .catch(err => {
        dispatch({type: POSTING_FAILED, })
        updateRootStateWithError(dispatch, err);
    });
};
