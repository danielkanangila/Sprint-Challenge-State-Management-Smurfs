import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILED = 'FETCHING_FAILED';

const BASE_URL = 'http://localhost:3333';

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCHING_START});
    axios.get(`${BASE_URL}/smurfs`)
    .then(res => dispatch({type: FETCHING_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCHING_FAILED, payload: `${err.message} with code ${err.code}`}));
}