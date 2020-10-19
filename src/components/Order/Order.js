import React from "react";
import classes from './Order.module.scss';
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const order = (props) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const ingredientsArray = [];
    for (let ingredientName in props.ingredients) {
        ingredientsArray.push(`${capitalize(ingredientName)} (${props.ingredients[ingredientName]})`);
    }
    let ingredientsString = ingredientsArray.join(', ');

    return (
        <div className={classes.Order}>
            <p>
                {/*Ingredients: Salad ({props.ingredients.salad}), Bacon ({props.ingredients.bacon}), Cheese ({props.ingredients.cheese}), Meat ({props.ingredients.meat})*/}
                Ingredients: {ingredientsString}
            </p>
            <p>
                Price: <strong>{props.price} USD</strong>
            </p>
        </div>
    );
}

export default order;