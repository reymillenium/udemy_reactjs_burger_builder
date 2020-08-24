import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from './Burger.module.scss';

const burger = (props) => {
    const ingredients_array = Object.keys(props.ingredients)
        .map(ingredient_key => {
            return [...Array(props.ingredients[ingredient_key])].map((_, i) => {
                return <BurgerIngredient key={ingredient_key + i} type={ingredient_key}/>
            });
        });

    console.log(ingredients_array);
    console.log(ingredients_array.flat(1));
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {/*{ingredients_array}*/}
            {ingredients_array.flat(1)}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;