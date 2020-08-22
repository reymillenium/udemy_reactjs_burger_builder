import React, {Component} from "react";
import Auxiliary from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxiliary>
                <div>BurgerBuilder: Burger with all the ingredients (graphic representation)</div>
                <div>BurgerBuilder: Build controls. Area to add and remove ingredients</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;