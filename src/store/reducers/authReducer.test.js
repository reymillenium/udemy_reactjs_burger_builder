import authReducer from "./authReducer";
import * as actionTypes from '../actions/actionTypes';
import {AUTH_LOG_OUT} from "../actions/actionTypes";

describe('authReducer', () => {
    const initialState = {
        idToken: null,
        userId: null,
        error: null,
        loading: null,
        authRedirectPath: '/'
    };

    it('should return the initial state when the state is just getting setup at the beginning of our app', () => {
        expect(authReducer(undefined, {})).toEqual(initialState);
    });

    it('should initiate the auth when trying to login', () => {
        const afterAuthStartState = {
            idToken: null,
            userId: null,
            error: null,
            loading: true,
            authRedirectPath: '/'
        };

        expect(authReducer(initialState, {
            type: actionTypes.AUTH_START
        })).toEqual(afterAuthStartState);
    });

    it('Should store the token upon login', () => {
        const afterAuthSuccessState = {
            idToken: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        };

        expect(authReducer(initialState, {
            type: actionTypes.AUTH_SUCCESS,
            payload: {
                idToken: 'some-token',
                userId: 'some-user-id'
            }
        })).toEqual(afterAuthSuccessState);
    });

    it('should store the error when the auth fails', () => {
        const afterAuthFailState = {
            idToken: null,
            userId: null,
            error: 'some-error',
            loading: false,
            authRedirectPath: '/'
        };


        expect(authReducer(initialState, {
            type: actionTypes.AUTH_FAIL,
            payload: {
                error: 'some-error'
            }
        })).toEqual(afterAuthFailState);

    });

    it('should destroy the token upon logout', () => {
        const afterAuthLogOutState = {
            idToken: null,
            userId: null,
            error: null,
            loading: null,
            authRedirectPath: '/'
        };

        expect(authReducer(initialState, {
            type: actionTypes.AUTH_LOG_OUT
        })).toEqual(afterAuthLogOutState);
    });

    it('should store the new redirect path', () => {
        const afterSetAuthRedirectPathState = {
            idToken: null,
            userId: null,
            error: null,
            loading: null,
            authRedirectPath: 'some-redirect-path'
        };

        expect(authReducer(initialState, {
            type: actionTypes.SET_AUTH_REDIRECT_PATH,
            payload: {
                authRedirectPath: 'some-redirect-path'
            }
        })).toEqual(afterSetAuthRedirectPathState);
    });
});