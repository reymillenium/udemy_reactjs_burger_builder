import React, {Component} from "react";
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    // The usual way:
    // constructor() {
    //     super();
    //     this.state = {}
    // }

    // More modern way to define the state on a class based container (stateful component):
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
    }

    addIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        // this.state.ingredients[type] += 1;


        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    removeIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;

        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        // for (var key in disabledInfo) {
        //     // check if the property/key is defined in the object itself, not in parent
        //     if (disabledInfo.hasOwnProperty(key)) {
        //         console.log(key, disabledInfo[key]);
        //     }
        // }

        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandle}
                    ingredientRemoved={this.removeIngredientHandle}
                    disabledInfo={disabledInfo}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;