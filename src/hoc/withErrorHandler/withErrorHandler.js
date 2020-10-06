import React, {Component} from "react";
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        // If this method gets deprecated in the future, then we can use the constructor
        // Using this instead of componentDidMount, allows to show an error before is executed componentDidMount on the children (wrappedComponent = BurgerBuilder in this case)
        // * ComponentDidMount is called only after ComponentDidMount is called on the children (after rendering the Child Components)
        componentWillMount() {
            // Clears the error on the request
            axios.interceptors.request.use(request => {
                this.setState({
                    error: null
                });
                return request;
            });

            axios.interceptors.response.use(response => response, error => {
                this.setState({
                    error: error
                });
            });
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            });
        }

        render() {
            return (
                <Auxiliary>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {/*Something didn't work!*/}
                        {this.state.error ? this.state.error.message : null}
                        {/*{this.state.error.message}*/}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Auxiliary>
            );
        }
    }
}

export default withErrorHandler;