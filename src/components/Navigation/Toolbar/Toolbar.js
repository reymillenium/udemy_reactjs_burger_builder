import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import DrawerToggler from "../SideDrawer/DrawerToggler/DrawerToggler";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggler click={props.open_sidedrawer}>MENU</DrawerToggler>
        {/*<HamburgerIcon open_sidedrawer={props.open_sidedrawer}>*/}
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