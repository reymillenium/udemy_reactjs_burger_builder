import React from "react";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

import classes from './NavigationItem.module.scss';

const navigationItem = (props) => (
    <li className={classes.NavigationItem} onClick={props.clicked}>
        {/*<a*/}
        {/*    href={props.href}*/}
        {/*    className={props.active ? classes.active : null}*/}
        {/*>{props.children}</a>*/}
        <NavLink
            to={props.href}
            exact={props.exact}
            activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

navigationItem.propTypes = {
    href: PropTypes.string.isRequired,
    active: PropTypes.bool,
    clicked: PropTypes.func
}

export default navigationItem;