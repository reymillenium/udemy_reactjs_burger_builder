import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from 'prop-types';

import classes from './Burger.module.scss';

const burger = (props) => {
    const ingredients_array_of_arrays = Object.keys(props.ingredients)
        .map(ingredient_key => {
            return [...Array(props.ingredients[ingredient_key])].map((_, i) => {
                return <BurgerIngredient key={ingredient_key + i} type={ingredient_key}/>
            });
        });

    // const ingredients_array = ingredients_array_of_arrays.reduce((arr, el) => {
    //     return arr.concat(el)
    // }, []);
    let ingredients_array = ingredients_array_of_arrays.flat(1);
    // console.log(ingredients_array_of_arrays);
    // console.log(ingredients_array);
    // console.log(Object.values(props.ingredients));
    // console.log(Object.values(props.ingredients).some(el => el > 0));

    if (ingredients_array.length === 0) {
        ingredients_array = <p style={{color: "red"}}>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {ingredients_array}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

burger.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default burger;