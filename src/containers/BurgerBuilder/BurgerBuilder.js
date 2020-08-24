import React, {Component} from "react";
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger.js';

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
        }
    }

    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <div>BurgerBuilder: Build controls. Area to add and remove ingredients</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;