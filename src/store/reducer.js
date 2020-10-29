import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese: 0.40,
    meat: 1.30,
    bacon: 0.70
};

const initialState = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const oldCount = state.ingredients[action.payload.type];
            const updateCount = oldCount + 1;
            const updatedIngredients = {
                ...state.ingredients
            };
            updatedIngredients[action.payload.type] = updateCount;
            // this.state.ingredients[type] += 1;

            const priceAddition = INGREDIENT_PRICES[action.payload.type];
            const oldPrice = state.totalPrice;
            const newPrice = (parseFloat(oldPrice) + parseFloat(priceAddition)).toFixed(2);

            // this.updatePurchasableState(updatedIngredients);

            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: newPrice,
                purchasable: updatePurchasableState(updatedIngredients)

            };
        case actionTypes.REMOVE_INGREDIENT:
            // const updatedArray = state.persons.filter(person => person.id !== action.payload.id);
            // return {
            //     ...state,
            //     persons: updatedArray
            // };




            const oldCount2 = state.ingredients[action.payload.type];

            if (oldCount2 <= 0) {
                return;
            }
            const updateCount2 = oldCount2 - 1;
            const updatedIngredients2 = {
                ...state.ingredients
            };
            updatedIngredients2[action.payload.type] = updateCount2;

            const priceReduction2 = INGREDIENT_PRICES[action.payload.type];
            const oldPrice2 = state.totalPrice;
            const newPrice2 = (parseFloat(oldPrice2) - parseFloat(priceReduction2)).toFixed(2);

            return {
                ...state,
                ingredients: updatedIngredients2,
                totalPrice: newPrice2,
                purchasable: updatePurchasableState(updatedIngredients2)

            };
        default:
            return {
                ...state,
            };
    }

    // return state;
}

const updatePurchasableState = (currentIngredients) => {
    return Object.values(currentIngredients).some(el => el > 0);
}

export default reducer;