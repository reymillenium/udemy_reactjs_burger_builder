import React, {Component} from "react";
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];

                for (let key in response.data) {
                    fetchedOrders.push({
                        // Gets all the fields in the js object and then adds a new one (id)
                        ...response.data[key],
                        id: key
                    });
                }

                // console.log('Orders -> fetchedOrders = ', fetchedOrders);

                this.setState({
                    loading: false,
                    orders: fetchedOrders
                });
            })
            .catch(error => {
                    this.setState({
                        loading: false
                    });
                }
            );
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        price={order.price}
                        ingredients={order.ingredients}
                    />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);