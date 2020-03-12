import axios from 'axios';
import { BASE_URL, updateRootStateWithSuccess, updateRootStateWithError } from '.';

export const deleteSmurf = id => dispatch => {
    axios.delete(`${BASE_URL}/${id}`)
    .then(res => updateRootStateWithSuccess(dispatch, 'smurfs', res.data))
    .catch(err => updateRootStateWithError(dispatch, err));
}