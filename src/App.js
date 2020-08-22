import React, {Component} from 'react';
// import './App.css';
import Layout from './components/Layout/Layout';
import Auxiliary from './hoc/Auxiliary';


class App extends Component {

    render() {
        return (
            <Auxiliary>
                <div>
                    <Layout>
                        <p>This is just a test. Here inside the payout, goes the page as a children</p>
                    </Layout>
                </div>
            </Auxiliary>
        );
    }
}

export default App;
