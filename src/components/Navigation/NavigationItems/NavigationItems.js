import React from "react";
import classes from './NavigationItems.module.scss';

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem href={"/"} active={true}>Burger Builder</NavigationItem>
        <NavigationItem href={"/orders"}>Orders</NavigationItem>
    </ul>
);

export default navigationItems;