import React from "react";
import burgerLogo from './../../../src/assets/images/burger_only_centered_trimmed_logo.png';
import classes from './Logo.module.scss';
import PropTypes from 'prop-types';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="BurgerBuilder"/>
    </div>
);

logo.propTypes = {
    height: PropTypes.number
}

export default logo;