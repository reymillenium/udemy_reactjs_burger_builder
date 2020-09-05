import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

import classes from './SideDrawer.module.scss';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, props.show ? classes.Open : classes.Close].join(' ');

    return (
        <Auxiliary>
            <BackDrop show={props.show}
                      backdrop_click={props.close}/>
            <div className={attachedClasses}>
                {/*<Logo height={"11%"}/>*/}
                {/* Another way without using props: */}
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>
    );

};

export default sideDrawer;