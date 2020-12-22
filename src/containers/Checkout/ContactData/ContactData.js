import React, {Component} from "react";

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

import {updateObject} from "../../../shared/utility";
import {checkValidity} from "../../../shared/validation";

import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actions";

class ContactData extends Component {
    state = {
        // ingredients: this.props.ingredients,

        // price: this.props.price,

        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validationRules: {
                    required: true,
                    minLength: 2,
                    namesOnly: true
                },
                valid: false,
                touched: false
            },

            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validationRules: {
                    required: true
                },
                valid: false,
                touched: false
            },


            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: '',
                validationRules: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    numbersOnly: true
                },
                valid: false,
                touched: false
            },

            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validationRules: {
                    required: true
                },
                valid: false,
                touched: false
            },


            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validationRules: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },

            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ],
                },
                value: 'fastest',
                validationRules: {},
                valid: true,
                touched: false
            }
        },

        formIsValid: false

        // loading: false
    }

    orderHandler = (event) => {
        // Prevents from sending the request and reload the page:
        event.preventDefault();
        // console.log('ContactData -> this.props.ingredients:', this.props.ingredients);
        // this.setState({loading: true});

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }

        // In a real price I would recalculate the price on the server
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData,
            userId: this.props.userId
        }

        // this.props.onPurchaseBurger(order, this.props.history);
        this.props.onPurchaseBurger(order, this.props.token);

        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({loading: false});
        //         this.props.history.push('/');
        //     }).catch(error => {
        //     this.setState({loading: false});
        // });

        // this.props.history.push("/checkout");
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // This does not creates a deep clone:
        // const updatedOrderForm = {
        //     ...this.state.orderForm
        // }
        // const updatedFormElement = {
        //     ...updatedOrderForm[inputIdentifier]
        // }
        // updatedFormElement.value = event.target.value;
        // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validationRules);
        // updatedFormElement.touched = true
        // updatedOrderForm[inputIdentifier] = updatedFormElement;

        // Using the utility function:
        // const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
        //     value: event.target.value,
        //     valid: this.checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validationRules),
        //     touched: true
        // });
        // const updatedOrderForm = updateObject(this.state.orderForm, {
        //     [inputIdentifier]: updatedFormElement
        // });

        // Also using the utility function, but more compact:
        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updateObject(this.state.orderForm[inputIdentifier], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validationRules),
                touched: true
            })
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = (!updatedOrderForm[inputIdentifier].valid ? false : formIsValid)
        }
        // console.log(this.state.formIsValid);
        // console.log(formIsValid);
        this.setState({
            orderForm: updatedOrderForm,
            formIsValid: formIsValid
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                data: this.state.orderForm[key]
            });
        }
        // console.log(formElementsArray);
        let form = (
            <form onSubmit={this.orderHandler}>
                {/*<input className={classes.Input} type="text" name={'name'} placeholder={'Your Name'}/>*/}
                {/*<input className={classes.Input} type="email" name={'email'} placeholder={'Your Email'}/>*/}
                {/*<input className={classes.Input} type="text" name={'street'} placeholder={'Your Street'}/>*/}
                {/*<input className={classes.Input} type="text" name={'postal'} placeholder={'Your Postal Code'}/>*/}

                {/*<Input inputtype={'input'} type="text" name={'name'} placeholder={'Your Name'}/>*/}
                {/*<Input inputtype={'input'} type="text" name={'street'} placeholder={'Your Street'}/>*/}
                {/*<Input inputtype={'input'} type="text" name={'postal'} placeholder={'Your Zip Code'}/>*/}
                {/*<Input inputtype={'input'} type="text" name={'country'} placeholder={'Your Country'}/>*/}
                {/*<Input inputtype={'input'} type="email" name={'zipcode'} placeholder={'Your Email'}/>*/}

                {/*<Input elementType={'...'} elementConfig={'...'} value={'...'}/>*/}
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        // name={formElement.id}
                        elementType={formElement.data.elementType}
                        elementConfig={formElement.data.elementConfig}
                        value={formElement.data.value}
                        invalid={!formElement.data.valid}
                        touched={formElement.data.touched}
                        shouldValidate={formElement.data.validationRules}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}

                <Button buttonType={'Success'} disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner/>;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.orderForm.loading,
        token: state.auth.idToken,
        userId: state.auth.userId
    };
};

// Using action creators
const mapDispatchToProps = dispatch => {
    return {
        onPurchaseBurger: (order, token) => dispatch(actionCreators.purchaseBurger(order, token))
    };
};

// export default ContactData;
// export default connect(mapStateToProps)(ContactData);
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));