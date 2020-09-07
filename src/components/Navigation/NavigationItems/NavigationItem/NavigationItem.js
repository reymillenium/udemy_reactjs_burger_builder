import React from "react";
import classes from './NavigationItem.module.scss';
import PropTypes from 'prop-types';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a
            href={props.href}
            className={props.active ? classes.active : null}
        >{props.children}</a>
    </li>
);

navigationItem.propTypes = {
    href: PropTypes.string.isRequired,
    active: PropTypes.bool
}

export default navigationItem;