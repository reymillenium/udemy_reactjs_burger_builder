import React from "react";
import classes from './Order.module.scss';
// import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

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
        <div className={classes.Order} key={props.id}>
            <p>
                {/*Ingredients: Salad ({props.ingredients.salad}), Bacon ({props.ingredients.bacon}), Cheese ({props.ingredients.cheese}), Meat ({props.ingredients.meat})*/}
                <strong>Ingredients:</strong> {ingredientsString} <strong> => Price:</strong> <span>{props.price} USD</span>
            </p>
            <p>
                <strong>Name:</strong> <span>{props.orderData.name}</span> : <strong>Email:</strong> <span>{props.orderData.email}</span>
            </p>
            <p>
                <strong>Address:</strong> <span>{props.orderData.street}, {props.orderData.zipCode}, {props.orderData.country}</span>
            </p>
        </div>
    );
}

export default order;