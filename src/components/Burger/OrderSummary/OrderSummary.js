import React from "react";
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const orderSummary = (props) => {
    const ingredientsSummaryList = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                {/*<li>{igKey.charAt(0).toUpperCase() + igKey.slice(1)}: {props.ingredients[igKey]}</li>*/}
                <span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
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
            <p><strong>Total Price: {props.total_price} USD</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType={'Danger'} clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button buttonType={'Success'} clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxiliary>
    );
}

orderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    total_price: PropTypes.number.isRequired,
    purchaseCanceled: PropTypes.func.isRequired,
    purchaseContinue: PropTypes.func.isRequired
}

export default orderSummary;