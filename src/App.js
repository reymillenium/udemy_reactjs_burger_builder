import React, {Component} from 'react';
// import './App.css';
import {Route} from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {

    render() {
        return (
            <Auxiliary>
                <Layout>
                    {/*<BurgerBuilder/>*/}
                    {/*<Checkout/>*/}

                    <Route path={"/"} exact={true} component={BurgerBuilder}/>
                    <Route path={"/checkout"} exact={true} component={Checkout}/>
                </Layout>
            </Auxiliary>
        );
    }
}

export default App;
