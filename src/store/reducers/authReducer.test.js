import authReducer from "./authReducer";
import * as actionTypes from '../actions/actionTypes';

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
        }

        expect(authReducer(initialState, {
            type: actionTypes.AUTH_SUCCESS,
            payload: {
                idToken: 'some-token',
                userId: 'some-user-id'
            }
        })).toEqual(afterAuthSuccessState);
    });

});