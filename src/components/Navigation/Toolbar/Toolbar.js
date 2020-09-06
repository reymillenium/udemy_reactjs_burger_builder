import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import DrawerToggle from "../SideDrawer/DrawerToggler/DrawerToggle";

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
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;