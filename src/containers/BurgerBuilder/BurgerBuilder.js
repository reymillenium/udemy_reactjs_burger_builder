import React, {Component} from "react";
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger.js';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <Burger/>
                <div>BurgerBuilder: Build controls. Area to add and remove ingredients</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;