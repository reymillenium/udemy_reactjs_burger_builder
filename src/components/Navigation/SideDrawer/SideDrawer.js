import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideDrawer.module.scss';

const sideDrawer = (props) => {
    //...
    return (
        <div className={classes.SideDrawer}>
            {/*<Logo height={"11%"}/>*/}
            {/* Another way without using props: */}
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );

};

export default sideDrawer;