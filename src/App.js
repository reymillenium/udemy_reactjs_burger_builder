import React, {Component} from 'react';
// import './App.css';
import Auxiliary from './hoc/Auxiliary';
import Layout from './components/Layout/Layout';
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
