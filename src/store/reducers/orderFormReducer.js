import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const orderFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.payload.order,
                id: action.payload.orderID
            };
            return {
                ...state,
                loading: false,
                purchased: true,
                // concat returns a new array -> we added this immutably
                orders: state.orders.concat(newOrder)
            };

        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            };

        default:
            return {
                ...state
            };
    }
};

export default orderFormReducer;
