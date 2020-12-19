import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese: 0.40,
    meat: 1.30,
    bacon: 0.70,
    building: false
};

const initialState = {
    // ingredients: {
    //     salad: 0,
    //     bacon: 0,
    //     cheese: 0,
    //     meat: 0
    // },
    // Now we are fetching the initial ingredients from the web again:
    ingredients: null,
    totalPrice: 4,
    // purchasable: false
    error: false
}

const addIngredient = (state, action) => {
    const updatedIngredientAdded = {[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1}
    const updatedIngredientsAdded = updateObject(state.ingredients, updatedIngredientAdded);
    const updatedStateAdded = {
        ingredients: updatedIngredientsAdded,
        totalPrice: (parseFloat(state.totalPrice) + parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2),
        building: true
    }
    return updateObject(state, updatedStateAdded);
}

const removeIngredient = (state, action) => {
    const updatedIngredientRemoved = {[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1}
    const updatedIngredientsRemoved = updateObject(state.ingredients, updatedIngredientRemoved);
    const updatedStateRemoved = {
        ingredients: updatedIngredientsRemoved,
        totalPrice: (parseFloat(state.totalPrice) - parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2),
        building: true
    }
    return updateObject(state, updatedStateRemoved);
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: action.payload.ingredients,
        totalPrice: 4,
        error: false,
        building: false // We are starting from scratch
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            // const oldCount = state.ingredients[action.payload.ingredientName];
            // const updateCount = oldCount + 1;
            // const updatedIngredients = {
            //     ...state.ingredients
            // };
            // updatedIngredients[action.payload.ingredientName] = updateCount;
            //
            // const priceAddition = INGREDIENT_PRICES[action.payload.ingredientName];
            // const oldPrice = state.totalPrice;
            // const newPrice = (parseFloat(oldPrice) + parseFloat(priceAddition)).toFixed(2);
            //
            // return {
            //     ...state,
            //     ingredients: updatedIngredients,
            //     totalPrice: newPrice,
            //     purchasable: updatePurchasableState(updatedIngredients)
            //
            // };

            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1
            //     },
            //     totalPrice: (parseFloat(state.totalPrice) + parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2)
            // };

            // const updatedIngredient = {[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1}
            // const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            // return {
            //     ...state.ingredients,
            //     ingredients: updatedIngredients,
            //     totalPrice: (parseFloat(state.totalPrice) + parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2)
            // };

            // Using the utility function:
            // const updatedIngredientAdded = {[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1}
            // const updatedIngredientsAdded = updateObject(state.ingredients, updatedIngredientAdded);
            // const updatedStateAdded = {
            //     ingredients: updatedIngredientsAdded,
            //     totalPrice: (parseFloat(state.totalPrice) + parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2)
            // }
            // return updateObject(state, updatedStateAdded);

            // Calling another function:
            return addIngredient(state, action);


        case actionTypes.REMOVE_INGREDIENT:
            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1
            //     },
            //     totalPrice: (parseFloat(state.totalPrice) - parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2)
            // };

            // Using the utility function:
            // const updatedIngredientRemoved = {[action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1}
            // const updatedIngredientsRemoved = updateObject(state.ingredients, updatedIngredientRemoved);
            // const updatedStateRemoved = {
            //     ingredients: updatedIngredientsRemoved,
            //     totalPrice: (parseFloat(state.totalPrice) - parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2)
            // }
            // return updateObject(state, updatedStateRemoved);

            // Calling another function:
            return removeIngredient(state, action);

        case actionTypes.SET_INGREDIENTS:
            // return {
            //     ...state,
            //     ingredients: action.payload.ingredients,
            //     totalPrice: 4,
            //     error: false
            // };

            // Using the utility function:
            // return updateObject(state, {ingredients: action.payload.ingredients, totalPrice: 4, error: false});

            // Calling another function:
            return setIngredients(state, action);

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            // return {
            //     ...state,
            //     error: true
            // };

            // Using the utility function:
            // return updateObject(state, {error: true});

            // Calling another function:
            return fetchIngredientsFailed(state, action);

        default:
            return {
                ...state
            };
    }

    // return state;
}

const updatePurchasableState = (currentIngredients) => {
    return Object.values(currentIngredients).some(el => el > 0);
}

export default burgerBuilderReducer;