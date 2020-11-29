import * as actionTypes from "./actionTypes";

export const addIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: {
            ingredientName: ingredientName
        }
    }
    // onAddIngredient: (ingredientName) => dispatch({type: actionTypes.ADD_INGREDIENT, payload: {ingredientName: ingredientName}}),
}

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: {
            ingredientName: ingredientName
        }
    }
    // onRemoveIngredient: (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, payload: {ingredientName: ingredientName}})
}