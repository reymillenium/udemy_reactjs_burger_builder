import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, localId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            idToken: idToken,
            userId: localId
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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('localId');

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
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('localId', response.data.localId);

                dispatch(authSuccess(response.data.idToken, response.data.localId));
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

export const setAuthRedirectPath = (authRedirectPath) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        payload: {
            authRedirectPath: authRedirectPath
        }
    }
};

// Pure utility action creator, that dispatches other actions depending of our current state:
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) { // There is no token
            dispatch(logOut());
        } else { // The token exists, but lets check the expiration date...
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate >= new Date()) { // All good yet
                const localId = localStorage.getItem('localId');
                dispatch(authSuccess(token, localId));

                // const expiresIn = (expirationDate.getTime() - new Date().getTime()) / 1000;
                const expiresIn = Math.abs(expirationDate - new Date()) / 1000;
                dispatch(checkAuthTimeOut(expiresIn));
            } else { // Our token has expired
                dispatch(logOut());
            }
        }
    }
};

