export * from './fetchSmurfAction';
export * from './addSmurfAction';
export * from './updateSmurfAction';
export * from './deleteSmurfAction';
export * from './resetFormAction';
export const BASE_URL = 'http://localhost:3333/smurfs';
export const UPDATE_ROOT_STATE = 'REFRESH_ROOT_STATE';

export const updateRootStateWithSuccess = (dispatch, key, payload) => {
    dispatch({type: UPDATE_ROOT_STATE, key, payload});
    dispatch({type: UPDATE_ROOT_STATE, key: 'error', payload: ''});
}
export const updateRootStateWithError = (dispatch, err) => {
    dispatch({
        type: UPDATE_ROOT_STATE, 
        key: 'error', 
        payload: `${err.message} with code ${err.code}`
    });
}