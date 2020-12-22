import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
    errors: null
}

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false});
};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.payload.order, {id: action.payload.orderID});
    return updateObject(state, {loading: false, purchased: true, orders: state.orders.concat(newOrder)});
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {loading: false, orders: action.payload.orders});
};

const fetchOrdersFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const orderFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            // return {
            //     ...state,
            //     purchased: false
            // };

            // Using the utility function:
            // return updateObject(state, {purchased: false});

            // Calling another function:
            return purchaseInit(state, action);

        case actionTypes.PURCHASE_BURGER_START:
            // return {
            //     ...state,
            //     loading: true
            // };

            // Using the utility function:
            // return updateObject(state, {loading: true});

            // Calling another function:
            return purchaseBurgerStart(state, action);

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

            // Using the utility function:
            // const newOrder = updateObject(action.payload.order, {id: action.payload.orderID});
            // return updateObject(state, {loading: false, purchased: true, orders: state.orders.concat(newOrder)});

            // Calling another function:
            return purchaseBurgerSuccess(state, action);

        case actionTypes.PURCHASE_BURGER_FAIL:
            // return {
            //     ...state,
            //     loading: false
            // };

            // Using the utility function:
            // return updateObject(state, {loading: false});

            // Calling another function:
            return purchaseBurgerFail(state, action);

        case actionTypes.FETCH_ORDERS_START:
            // return {
            //     ...state,
            //     loading: true
            // };

            // Using the utility function:
            // return updateObject(state, {loading: true});

            // Calling another function:
            return fetchOrdersStart(state, action);

        case actionTypes.FETCH_ORDERS_SUCCESS:
            // return {
            //     ...state,
            //     loading: false,
            //     orders: action.payload.orders
            // };

            // Using the utility function:
            // return updateObject(state, {loading: false, orders: action.payload.orders});

            // Calling another function:
            return fetchOrdersSuccess(state, action);

        case actionTypes.FETCH_ORDERS_FAIL:
            // return {
            //     ...state,
            //     // error: action.payload.error,
            //     loading: false
            // };

            // Using the utility function:
            // return updateObject(state, {loading: false});

            // Calling another function:
            return fetchOrdersFail(state, action);

        default:
            return {
                ...state
            };
    }
};

export default orderFormReducer;
