import React from "react";
import classes from './Order.module.scss';

const order = (props) => {
    return (
        <div className={classes.Order}>
            <p>
                Ingredients: Salad ({props.ingredients.salad}), Bacon ({props.ingredients.bacon}), Cheese ({props.ingredients.cheese}), Meat ({props.ingredients.meat})
            </p>
            <p>
                Price: <strong>{props.price} USD</strong>
            </p>
        </div>
    );
}

export default order;