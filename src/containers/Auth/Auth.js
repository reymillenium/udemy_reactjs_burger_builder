import React, {Component} from "react";

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from "../../components/UI/Spinner/Spinner";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {updateObject} from "../../shared/utility";
import {checkValidity} from "../../shared/validation";

import classes from "./Auth.module.scss";
import axios from '../../axios-orders';

import {connect} from 'react-redux';
import * as actionCreators from "../../store/actions";
import {Redirect} from 'react-router-dom';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                    autoComplete: 'username'
                },
                value: '',
                validationRules: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },

            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password',
                    autoComplete: 'current-password'
                },
                value: '',
                validationRules: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },

        formIsValid: false,
        isSignUp: false
    }

    authHandler = (event) => {
        // Prevents from sending the request and reloading the page:
        event.preventDefault();
        let isSignUp = this.state.isSignUp;

        const formData = {};
        for (let formElementIdentifier in this.state.controls) {
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value
        }

        this.props.onAuth(formData['email'], formData['password'], isSignUp);
    }

    componentDidMount() {
        // When the user was in BurgerBuilder and then he clicked on Authenticate
        if (!this.props.building && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath('/');
        }
        // Works: What matters is building only:
        // if (!this.props.building) {
        //     this.props.onSetAuthRedirectPath('/');
        // }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // This does not creates a deep clone:
        // const updatedAuthForm = {
        //     ...this.state.controls
        // }
        // const updatedFormElement = {
        //     ...updatedAuthForm[inputIdentifier]
        // }
        // updatedFormElement.value = event.target.value;
        // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validationRules);
        // updatedFormElement.touched = true
        // updatedAuthForm[inputIdentifier] = updatedFormElement;

        // Exactly the same:
        // const updatedAuthForm = {
        //     ...this.state.controls,
        //     [inputIdentifier]: {
        //         ...this.state.controls[inputIdentifier],
        //         value: event.target.value,
        //         valid: this.checkValidity(event.target.value, this.state.controls[inputIdentifier].validationRules),
        //         touched: true
        //     }
        // };

        // Also the same, but using the utility function:
        // const updateAuthElement = updateObject(this.state.controls[inputIdentifier], {
        //     value: event.target.value,
        //     valid: this.checkValidity(event.target.value, this.state.controls[inputIdentifier].validationRules),
        //     touched: true
        // });
        // const updatedAuthForm = updateObject(this.state.controls, {
        //     [inputIdentifier]: updateAuthElement
        // });

        // Also using the utility function, but more compact:
        const updatedAuthForm = updateObject(this.state.controls, {
            [inputIdentifier]: updateObject(this.state.controls[inputIdentifier], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[inputIdentifier].validationRules),
                touched: true
            })
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedAuthForm) {
            formIsValid = (!updatedAuthForm[inputIdentifier].valid ? false : formIsValid)
        }
        this.setState({
            controls: updatedAuthForm,
            formIsValid: formIsValid
        });
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            }
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                data: this.state.controls[key]
            });
        }

        let form = (
            <form onSubmit={this.authHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        // name={formElement.id}
                        elementType={formElement.data.elementType}
                        elementConfig={formElement.data.elementConfig}
                        value={formElement.data.value}
                        invalid={!formElement.data.valid}
                        touched={formElement.data.touched}
                        shouldValidate={formElement.data.validationRules}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}

                <Button buttonType={'Success'} disabled={!this.state.formIsValid}>{(this.state.isSignUp ? "SIGN UP" : "SIGN IN")}</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner/>;
        }

        let errorMessage = null;
        // Message property from Firebase:
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        // Redirects if the user is authenticated:
        if (this.props.isAuthenticated) {
            // authRedirect = <Redirect to={this.props.building ? '/checkout' : '/'}/>;
            authRedirect = <Redirect to={this.props.authRedirectPath}/>;
        }

        return (
            <div>
                <div className={classes.Auth}>
                    <h4>{(this.state.isSignUp ? "SIGN UP" : "SIGN IN") + " FORM"}</h4>
                    {authRedirect}
                    {errorMessage}
                    {form}
                    <Button
                        buttonType={'Danger'}
                        disabled={!this.state.formIsValid}
                        clicked={this.switchAuthModeHandler}>
                        {"SWITCH TO " + (this.state.isSignUp ? "SIGN IN" : "SIGN UP")}
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.idToken !== null,
        building: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actionCreators.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: (authRedirectPath) => dispatch(actionCreators.setAuthRedirectPath(authRedirectPath))
    };
};

// export default Auth;
// export default withErrorHandler(Auth, axios);
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Auth, axios));