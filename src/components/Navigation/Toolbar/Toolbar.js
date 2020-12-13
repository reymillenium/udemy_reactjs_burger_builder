import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from "../SideDrawer/DrawerToggler/DrawerToggle";
import PropTypes from 'prop-types';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        {/*<HamburgerIcon clicked={props.drawerToggleClicked}>*/}
        {/*<HamburgerIcon>*/}
        {/*    /!*MENU*!/*/}
        {/*</HamburgerIcon>*/}

        {/*<Logo height={'80%'}/>*/}
        {/* Another way: */}
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuthenticated}/>
        </nav>
    </header>
);

toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func.isRequired
}

export default toolbar;