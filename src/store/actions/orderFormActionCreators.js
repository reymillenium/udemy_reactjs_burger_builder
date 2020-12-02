import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// Synchronous Action creator:
export const purchaseBurgerSuccess = (orderID, order) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        payload: {
            orderID: orderID,
            order: order
        }
    }
};

// Synchronous Action creator:
export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        payload: {
            error: error
        }
    }
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
};

// Asynchronous Action creator:
// This is the action we dispatch from the container once we click that 'Order' button
export const purchaseBurger = (order, history) => {
    // Using the redux-thunk middleware
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', order)
            .then(response => {
                // this.setState({loading: false});
                // this.props.history.push('/');
                // console.log(response.data.name);
                dispatch(purchaseBurgerSuccess(response.data.name, order));
                // history.push('/');
            }).catch(error => {
            // this.setState({loading: false});
            dispatch(purchaseBurgerFail(error));
        });
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
};