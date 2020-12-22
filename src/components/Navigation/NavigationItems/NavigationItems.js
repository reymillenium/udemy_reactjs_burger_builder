import React from "react";
import PropTypes from 'prop-types';

import classes from './NavigationItems.module.scss';

import NavigationItem from "./NavigationItem/NavigationItem";
import sideDrawer from "../SideDrawer/SideDrawer";

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem href={"/"} exact={true} clicked={props.clicked}>Burger Builder</NavigationItem>

        {props.isAuthenticated
            ? <NavigationItem href={"/orders"} clicked={props.clicked}>Orders</NavigationItem>
            : null}

        {props.isAuthenticated
            ? <NavigationItem href={"/logout"} clicked={props.clicked}>Logout</NavigationItem>
            : <NavigationItem href={"/auth"} clicked={props.clicked}>Authenticate</NavigationItem>}
    </ul>
);

sideDrawer.propTypes = {
    clicked: PropTypes.func
}

export default navigationItems;