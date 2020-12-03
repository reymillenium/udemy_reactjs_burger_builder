import React, {Component} from "react";
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from '../../components/UI/Spinner/Spinner';

import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions";

class Orders extends Component {
    state = {
        // We are now using redux instead of local state
        // orders: [],
        loading: true
    }

    componentDidMount() {
        // axios.get('/orders.json')
        //     .then(response => {
        //         const fetchedOrders = [];
        //
        //         for (let key in response.data) {
        //             fetchedOrders.push({
        //                 // Gets all the fields in the js object and then adds a new one (id)
        //                 ...response.data[key],
        //                 id: key
        //             });
        //         }
        //
        //         // console.log('Orders -> fetchedOrders = ', fetchedOrders);
        //
        //         this.setState({
        //             loading: false,
        //             orders: fetchedOrders
        //         });
        //     })
        //     .catch(error => {
        //             this.setState({
        //                 loading: false
        //             });
        //         }
        //     );

        this.props.onFetchOrders();
    }

    render() {
        let orders = <Spinner/>;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    key={order.id}
                    price={order.price}
                    ingredients={order.ingredients}
                    orderData={order.orderData}
                />
            ))
        }

        return (
            <div>
                {/*{this.state.orders.map(order => (*/}
                {/* Using redux instead of local state: */}
                {/*{this.props.orders.map(order => (*/}
                {/*    <Order*/}
                {/*        key={order.id}*/}
                {/*        price={order.price}*/}
                {/*        ingredients={order.ingredients}*/}
                {/*        orderData={order.orderData}*/}
                {/*    />*/}
                {/*))}*/}
                {/* Adding a spinner when loading */}
                {orders}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        orders: state.orderForm.orders,
        loading: state.orderForm.loading
    };
};

// Using action creators
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actionCreators.fetchOrders())
    };
};

// export default withErrorHandler(Orders, axios);
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));