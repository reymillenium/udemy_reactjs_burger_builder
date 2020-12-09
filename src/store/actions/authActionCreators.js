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
        payload: {
            idToken: authData.idToken,
            userID: authData.localId
        }
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: {
            error: error
        }
    };
};

export const checkAuthTimeOut = (expirationTime) => {
    // Returns a function that gets dispatch as an argument:
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000);
    }
};

export const logOut = () => {
    return {
        type: actionTypes.AUTH_LOG_OUT
    }
};

export const auth = (email, password, isSignUp) => {
    const apiKey = process.env.REACT_APP_API_KEY;
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
                console.log('response.data = ', response.data);
                dispatch(authSuccess(response.data));
                dispatch(checkAuthTimeOut(response.data.expiresIn));
            })
            .catch(error => {
                    console.log('error = ', error);
                    //  The received error is an object from axios (that wraps the response), but we need the error from Firebase:
                    dispatch(authFail(error.response.data.error));
                }
            );
    };
};

