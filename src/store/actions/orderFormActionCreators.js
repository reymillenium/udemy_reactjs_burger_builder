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
export const purchaseBurger = (order, token) => {
    // Using the redux-thunk middleware
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, order)
            .then(response => {
                // this.setState({loading: false});
                // this.props.history.push('/');
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

// *** Fetching orders: ***

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        payload: {
            orders: orders
        }
    }
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        payload: {
            error: error
        }
    }
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
};

export const fetchOrders = (token, userId) => {
    // Using the redux-thunk middleware
    return dispatch => {
        dispatch(fetchOrdersStart());
        // const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        // axios.get('/orders.json?auth=' + token)
        axios.get('/orders.json' + queryParams)
            .then(response => {
                const fetchedOrders = [];

                // Transforms the orders in array format
                for (let key in response.data) {
                    fetchedOrders.push({
                        // Gets all the fields in the js object and then adds a new one (id)
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(error => {
                dispatch(fetchOrdersFail(error));
            });
    };
};