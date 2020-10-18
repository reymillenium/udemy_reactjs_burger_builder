import React, {Component} from "react";
import classes from './ContactData.module.scss';

import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form action="">
                    <input className={classes.Input} type="text" name={'name'} placeholder={'Your Name'}/>
                    <input className={classes.Input} type="email" name={'email'} placeholder={'Your Email'}/>
                    <input className={classes.Input} type="text" name={'street'} placeholder={'Your Street'}/>
                    <input className={classes.Input} type="text" name={'postal'} placeholder={'Your Postal Code'}/>

                    <Button buttonType={'Success'}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;