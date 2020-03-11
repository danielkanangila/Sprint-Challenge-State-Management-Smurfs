import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILED = 'FETCHING_FAILED';
export const POSTING_START = 'POSTING_START';
export const POSTING_SUCCESS = 'POSTING_SUCCESS';
export const POSTING_FAILED = 'POSTING_FAILED';

const BASE_URL = 'http://localhost:3333';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCHING_START});
    axios.get(`${BASE_URL}/smurfs`)
    .then(res => dispatch({type: FETCHING_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCHING_FAILED, payload: `${err.message} with code ${err.code}`}));
}

export const addSmurf = data => dispatch => {
    dispatch({type: POSTING_START});
    axios.post(`${BASE_URL}/smurfs`, data)
    .then(res => dispatch({type: POSTING_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: POSTING_FAILED, payload: `${err.message} with code ${err.code}`}));
}