import React, {Component} from 'react';
// import './App.css';
import {Route, Switch} from 'react-router-dom';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";

class App extends Component {

    render() {
        return (
            <Auxiliary>
                <Layout>
                    {/* No more. Now we are using routes. */}
                    {/*<BurgerBuilder/>*/}
                    {/*<Checkout/>*/}

                    {/* It works: */}
                    {/* An exact match, doesn't matter the order */}
                    {/*<Route path={"/checkout"} exact={true} component={Checkout}/>*/}
                    {/*<Route path={"/"} exact={true} component={BurgerBuilder}/>*/}

                    <Switch>
                        {/* It works: Gets the first match only. It is an exact match also, so it doesn't matter the order  */}
                        {/*<Route path={"/checkout"} exact={true} component={Checkout}/>*/}
                        {/*<Route path={"/"} exact={true} component={BurgerBuilder}/>*/}

                        {/* It works: */}
                        {/* Gets the first match only. The order matters. So, the root must be the last one */}
                        <Route path={"/checkout"} component={Checkout}/>
                        <Route path={"/orders"} component={Orders}/>
                        <Route path={"/login"} component={Auth}/>
                        <Route path={"/"} component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </Auxiliary>
        );
    }
}

export default App;
