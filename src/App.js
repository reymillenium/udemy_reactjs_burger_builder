import React, {Component} from 'react';
// import './App.css';
import Auxiliary from './hoc/Auxiliary/Auxiliary';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";


class App extends Component {

    render() {
        return (
            <Auxiliary>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </Auxiliary>
        );
    }
}

export default App;
