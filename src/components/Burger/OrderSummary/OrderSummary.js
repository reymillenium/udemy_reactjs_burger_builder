import React, {Component} from "react";
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

class OrderSummary extends Component {
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[OrderSummary] -> componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[OrderSummary] -> componentDidUpdate');
    }

    render() {
        const ingredientsSummaryList = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    {/*<li>{igKey.charAt(0).toUpperCase() + igKey.slice(1)}: {props.ingredients[igKey]}</li>*/}
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>Delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummaryList}
                </ul>
                <p><strong>Total Price: {this.props.total_price} USD</strong></p>
                <p>Continue to Checkout?</p>
                <Button buttonType={'Danger'} clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button buttonType={'Success'} clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxiliary>
        );
    }
}

OrderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    total_price: PropTypes.number.isRequired,
    purchaseCanceled: PropTypes.func.isRequired,
    purchaseContinue: PropTypes.func.isRequired
}

export default OrderSummary;