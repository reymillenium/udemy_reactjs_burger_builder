import React, {Component} from "react";

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        // Prevents from sending the request and reload the page:
        event.preventDefault();
        // console.log('ContactData -> this.props.ingredients:', this.props.ingredients);
        this.setState({
            loading: true
        });
        // In a real price I would recalculate the price on the server
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Reinier Garcia",
                address: {
                    street: '101 SW',
                    zipCode: '33135',
                    country: 'United States of America'
                },
                email: 'reymillenium@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                // console.log(response);
                this.setState({
                    loading: false
                });
            }).catch(error => {
            // console.log(error);
            this.setState({
                loading: false
            });
        });

        // this.props.history.push("/checkout");
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form action="">
                    <input className={classes.Input} type="text" name={'name'} placeholder={'Your Name'}/>
                    <input className={classes.Input} type="email" name={'email'} placeholder={'Your Email'}/>
                    <input className={classes.Input} type="text" name={'street'} placeholder={'Your Street'}/>
                    <input className={classes.Input} type="text" name={'postal'} placeholder={'Your Postal Code'}/>

                    <Button buttonType={'Success'} clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;