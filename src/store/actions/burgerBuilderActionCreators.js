import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

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

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        payload: {
            ingredients: ingredients
        }
    }

}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const fetchInitialIngredients = () => {
    // Syntax thanks to redux-thunk:
    return dispatch => {
        axios.get('https://udemy-reactjs-burger-bui-82d48.firebaseio.com/ingredients.json')
            .then(response => {
                // this.setState({
                //     ingredients: response.data
                // })

                // Calls now the action creator passing the ingredients as parameter:
                dispatch(setIngredients(response.data));
            }).catch(error => {
                // Having a catch method allows to avoid executing the then method when an error is present
                // this.setState({
                //     error: true
                // });
                dispatch(fetchIngredientsFailed());
            }
        );
    }
}