import React, {Component} from "react";
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from '../../axios-orders';

import {connect} from 'react-redux';
// import * as actionTypes from '../../store/actions/actionTypes';
// import * as burgerBuilderActionCreators from "../../store/actions/burgerBuilderActionCreators";
import * as actionCreators from "../../store/actions/index";

const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese: 0.40,
    meat: 1.30,
    bacon: 0.70
};

class BurgerBuilder extends Component {
    // The usual way:
    // constructor() {
    //     super();
    //     this.state = {}
    // }

    // More modern way to define the state on a class based container (stateful component):
    state = {
        // ingredients: null,
        // totalPrice: 4,
        // purchasable: false,
        purchasing: false
        // loading: false,
        // error: false
    }

    componentDidMount() {
        // console.log(this.props);
        // axios.get('https://udemy-reactjs-burger-bui-82d48.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({
        //             ingredients: response.data
        //         })
        //     }).catch(error => {
        //         // Having a catch method allows to avoid executing the then method when an error is present
        //         this.setState({
        //             error: true
        //         });
        //     }
        // );

        // Using asynchronous redux-thunk:
        this.props.onFetchInitialIngredients();
    }

    // addIngredientHandle = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updateCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updateCount;
    //     // this.state.ingredients[type] += 1;
    //
    //
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = (parseFloat(oldPrice) + parseFloat(priceAddition)).toFixed(2);
    //
    //     this.setState({
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     });
    //
    //     this.updatePurchasableState(updatedIngredients);
    // }

    // removeIngredientHandle = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updateCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updateCount;
    //
    //     const priceReduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = (parseFloat(oldPrice) - parseFloat(priceReduction)).toFixed(2);
    //
    //     this.setState({
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     });
    //
    //     this.updatePurchasableState(updatedIngredients);
    // }

    // updatePurchasableState(currentIngredients) {
    //     const isNowPurchasable = Object.values(currentIngredients).some(el => el > 0)
    //     this.setState({
    //         purchasable: isNowPurchasable
    //     });
    // }

    isPurchasable(currentIngredients) {
        return Object.values(currentIngredients).some(el => el > 0)
    }

    purchasingHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({
                purchasing: true
            });
        } else {
            this.props.history.push('/auth');
        }
    }

    purchasingCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        // // alert('You continue!');
        // this.setState({
        //     loading: true
        // });
        // // In a real price I would recalculate the price on the server
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Reinier Garcia",
        //         address: {
        //             street: '101 SW',
        //             zipCode: '33135',
        //             country: 'United States of America'
        //         },
        //         email: 'reymillenium@gmail.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        //
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         // console.log(response);
        //         this.setState({
        //             loading: false,
        //             purchasing: false
        //         });
        //     }).catch(error => {
        //     // console.log(error);
        //     this.setState({
        //         loading: false,
        //         purchasing: false
        //     });
        // });

        // this.props.history.push("/checkout");

        // Is using redux now:
        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price=' + this.props.totalPrice);
        // // console.log(queryParams);
        //
        // const queryString = queryParams.join('&');
        // // console.log(queryString);
        //
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });

        // It resets purchased to false again:
        this.props.onPurchaseInit();
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner/>

        if (this.props.ingredients) {
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.props.onAddIngredient}
                        ingredientRemoved={this.props.onRemoveIngredient}
                        disabledInfo={disabledInfo}
                        price={parseFloat(this.props.totalPrice)}
                        purchasable={this.isPurchasable(this.props.ingredients)}
                        ingredient_prices={INGREDIENT_PRICES}
                        order_click={this.purchasingHandler}
                        isAuthenticated={this.props.isAuthenticated}
                    />
                </Auxiliary>
            );

            orderSummary = <OrderSummary
                ingredients={this.props.ingredients}
                purchaseCanceled={this.purchasingCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                total_price={parseFloat(this.props.totalPrice)}/>
        }

        // if (this.state.loading) {
        //     orderSummary = <Spinner/>
        // }


        // for (var key in disabledInfo) {
        //     // check if the property/key is defined in the object itself, not in parent
        //     if (disabledInfo.hasOwnProperty(key)) {
        //         console.log(key, disabledInfo[key]);
        //     }
        // }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}


const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        // purchasable: state.burgerBuilder.purchasable,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.idToken !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // Dispatch functions (dispatches actions directly):
        // onAddIngredient: (ingredientName) => dispatch({type: actionTypes.ADD_INGREDIENT, payload: {ingredientName: ingredientName}}),
        // onRemoveIngredient: (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, payload: {ingredientName: ingredientName}})

        // Dispatch functions with action creators:
        // onAddIngredient: (ingredientName) => dispatch(burgerBuilderActionCreators.addIngredient(ingredientName)),
        // onRemoveIngredient: (ingredientName) => dispatch(burgerBuilderActionCreators.removeIngredient(ingredientName))

        // Dispatch functions with action creators & grouping using a central file:
        onAddIngredient: (ingredientName) => dispatch(actionCreators.addIngredient(ingredientName)),
        onRemoveIngredient: (ingredientName) => dispatch(actionCreators.removeIngredient(ingredientName)),
        onFetchInitialIngredients: () => dispatch(actionCreators.fetchInitialIngredients()),
        onFetchIngredientsFailed: () => dispatch(actionCreators.fetchIngredientsFailed()),
        onPurchaseInit: () => dispatch(actionCreators.purchaseInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
// export default withErrorHandler(BurgerBuilder, axios);