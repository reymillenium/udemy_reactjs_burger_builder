import * as actionTypes from './actionTypes';
import axios from 'axios';

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

export const auth = (email, password, isSignUp) => {
    const apiKey = 'AIzaSyDY5is_OJC4q4A8dpPeeTjyF5I4dLWTzJQ';
    // const signInWithCustomTokenEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`;
    const signUpWithEmailAndPasswordEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    const signInWithEmailAndPasswordEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    let endPointURL = isSignUp ? signUpWithEmailAndPasswordEndPoint : signInWithEmailAndPasswordEndPoint;

    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        axios.post(endPointURL, authData)
            .then(response => {
                console.log('response = ', response);
                dispatch(authSuccess(response.data));
            })
            .catch(error => {
                    console.log('error = ', error);
                    dispatch(authFail(error));
                }
            );
    };
};

