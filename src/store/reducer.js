import * as actionTypes from './actions';

const initialState = {
    ingredients: null,
    totalPrice: 4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const newPerson = {
                id: (new Date() + Math.random()),
                name: action.payload.name,
                age: action.payload.age
            }





            // const oldCount = this.state.ingredients[type];
            // const updateCount = oldCount + 1;
            // const updatedIngredients = {
            //     ...this.state.ingredients
            // };
            // updatedIngredients[type] = updateCount;
            // // this.state.ingredients[type] += 1;
            //
            //
            // const priceAddition = INGREDIENT_PRICES[type];
            // const oldPrice = this.state.totalPrice;
            // const newPrice = (parseFloat(oldPrice) + parseFloat(priceAddition)).toFixed(2);
            //
            // this.setState({
            //     ingredients: updatedIngredients,
            //     totalPrice: newPrice
            // });
            //
            // this.updatePurchasableState(updatedIngredients);





            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.REMOVE_INGREDIENT:
            const updatedArray = state.persons.filter(person => person.id !== action.payload.id);
            return {
                ...state,
                persons: updatedArray
            };
        default:
            return {
                ...state,
            };
    }

    // return state;
}

export default reducer;