import React from "react";
import burgerLogo from './../../../src/assets/images/burger_only_centered_trimmed_logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="BurgerBuilder"/>
    </div>
);

export default logo;