import axios from 'axios';
import { BASE_URL, UPDATE_ROOT_STATE } from './';

export const POSTING_START = 'POSTING_START';
export const POSTING_SUCCESS = 'POSTING_SUCCESS';
export const POSTING_FAILED = 'POSTING_FAILED';

export const addSmurf = data => dispatch => {
    dispatch({type: POSTING_START});
    dispatch({type: UPDATE_ROOT_STATE, key: 'error', payload: ''});
    axios.post(`${BASE_URL}/smurfs`, data)
    .then(res => {
        dispatch({type: POSTING_SUCCESS, payload: res.data})
        dispatch({type: UPDATE_ROOT_STATE, key: 'smurfs', payload: res.data});
        dispatch({type: UPDATE_ROOT_STATE, key: 'error', payload: res.data});
    })
    .catch(err => {
        dispatch({type: POSTING_FAILED, })
        dispatch({
            type: UPDATE_ROOT_STATE, 
            key: 'error', 
            payload: `${err.message} with code ${err.code}`
        });
    });
};
