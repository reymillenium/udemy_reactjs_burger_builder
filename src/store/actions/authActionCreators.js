import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    const api_key = 'AIzaSyDY5is_OJC4q4A8dpPeeTjyF5I4dLWTzJQ';
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        // axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]');
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${api_key}`, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(
                error => {
                    console.log(error);
                    dispatch(authFail(error));
                }
            );
    };
};

