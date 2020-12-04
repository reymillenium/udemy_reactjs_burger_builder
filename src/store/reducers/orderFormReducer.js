import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
    errors: null
}

const orderFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            // return {
            //     ...state,
            //     purchased: false
            // };

            return updateObject(state, {purchased: false});

        case actionTypes.PURCHASE_BURGER_START:
            // return {
            //     ...state,
            //     loading: true
            // };

            return updateObject(state, {loading: true});

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            // const newOrder = {
            //     ...action.payload.order,
            //     id: action.payload.orderID
            // };
            // return {
            //     ...state,
            //     loading: false,
            //     purchased: true,
            //     // concat returns a new array -> we added this immutably
            //     orders: state.orders.concat(newOrder)
            // };

            const newOrder = updateObject(action.payload.order, {id: action.payload.orderID});
            return updateObject(state, {loading: false, purchased: true, orders: state.orders.concat(newOrder)});

        case actionTypes.PURCHASE_BURGER_FAIL:
            // return {
            //     ...state,
            //     loading: false
            // };

            return updateObject(state, {loading: false});

        case actionTypes.FETCH_ORDERS_START:
            // return {
            //     ...state,
            //     loading: true
            // };

            return updateObject(state, {loading: true});

        case actionTypes.FETCH_ORDERS_SUCCESS:
            // return {
            //     ...state,
            //     loading: false,
            //     orders: action.payload.orders
            // };

            return updateObject(state, {loading: false, orders: action.payload.orders});

        case actionTypes.FETCH_ORDERS_FAIL:
            // return {
            //     ...state,
            //     // error: action.payload.error,
            //     loading: false
            // };

            return updateObject(state, {loading: false});

        default:
            return {
                ...state
            };
    }
};

export default orderFormReducer;
