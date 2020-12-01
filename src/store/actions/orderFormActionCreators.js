import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// Synchronous Action creator:
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        payload: {
            orderID: id,
            orderData: orderData
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

// Asynchronous Action creator:
// This is the action we dispatch from the container once we click that 'Order' button
export const purchaseBurgerStart = (order) => {
    // Using the redux-thunk middleware
    return dispatch => {
        axios.post('/orders.json', order)
            .then(response => {
                // this.setState({loading: false});
                // this.props.history.push('/');
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data, order));
            }).catch(error => {
            // this.setState({loading: false});
            dispatch(purchaseBurgerFail(error));
        });
    }
};