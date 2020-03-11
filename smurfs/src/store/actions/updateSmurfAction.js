import { BASE_URL } from './';

export const EDIT_SMURF = 'EDIT_SMURF';

export const editSmurf = data => {
    return {
        type: EDIT_SMURF,
        payload: data
    }
}