import React from "react";
import BuildControl from './BuildControl/BuildControl';
import PropTypes from 'prop-types';

import classes from './BuildControls.module.scss';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabledInfo[ctrl.type]}
                ingredient_price={props.ingredient_prices[ctrl.type]}
            />
        ))}
        <button
            disabled={!props.purchasable || !props.isAuthenticated}
            className={classes.OrderButton}
            onClick={props.order_click}>
            {props.isAuthenticated ? 'ORDER NOW' : 'LOGIN TO ORDER'}
        </button>
    </div>
);

buildControls.propTypes = {
    price: PropTypes.number.isRequired,
    ingredientAdded: PropTypes.func.isRequired,
    ingredientRemoved: PropTypes.func.isRequired,
    disabledInfo: PropTypes.object.isRequired,
    ingredient_prices: PropTypes.object.isRequired,
    purchasable: PropTypes.bool.isRequired
};

export default buildControls;