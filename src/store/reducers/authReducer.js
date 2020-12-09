import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    idToken: null,
    userID: null,
    error: null,
    loading: null
};

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        idToken: action.payload.idToken,
        userID: action.payload.userID,
        error: null,
        loading: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.payload.error,
        loading: false
    });
}

const authLogOut = (state, action) => {
    return updateObject(state, {
        idToken: null,
        userID: null
    });
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOG_OUT:
            return authLogOut(state, action);
        default:
            return {
                ...state
            }
    }
}

export default authReducer;