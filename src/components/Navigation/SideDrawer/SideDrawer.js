import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import PropTypes from 'prop-types';

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

sideDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
}

export default sideDrawer;