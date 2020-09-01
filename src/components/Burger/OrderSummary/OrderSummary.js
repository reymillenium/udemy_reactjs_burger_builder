import React from "react";
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
            <p>Continue to Checkout?</p>
            {/*<button>CANCEL</button>*/}
            {/*<button>CONTINUE</button>*/}
            <Button type={'Dancer'}>CANCEL</Button>
            <Button type={'Success'}>CONTINUE</Button>


        </Auxiliary>
    );
}

export default orderSummary;