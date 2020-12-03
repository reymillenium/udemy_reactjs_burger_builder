import * as actionTypes from '../actions/actionTypes';

const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese: 0.40,
    meat: 1.30,
    bacon: 0.70
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

            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1
                },
                totalPrice: (parseFloat(state.totalPrice) + parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2)
            };

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1
                },
                totalPrice: (parseFloat(state.totalPrice) - parseFloat(INGREDIENT_PRICES[action.payload.ingredientName])).toFixed(2)
            };

        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload.ingredients,
                totalPrice: 4,
                error: false
            };

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };

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