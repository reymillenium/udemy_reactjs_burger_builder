import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false
}

const orderFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.payload.order,
                id: action.payload.orderID
            };
            return {
                ...state,
                loading: false,
                // concat returns a new array -> we added this immutably
                orders: state.orders.concat(newOrder)
            };

        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return {
                ...state
            };
    }
};

export default orderFormReducer;
