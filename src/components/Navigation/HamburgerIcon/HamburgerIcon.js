import React from "react";
import PropTypes from 'prop-types';

import classes from './HamburgerIcon.module.scss';

const hamburgerIcon = (props) => (
    // <div className={classes.hamburger}>
    //     {props.children}
    // </div>
    // const isActiveClass = props.open
    <button className={[classes.hamburger, classes.hamburgerBoring, classes.isActive].join(' ')} onClick={props.clicked} type="button">
      <span className={classes.hamburgerBox}>
        <div className={classes.hamburgerInner}></div>
      </span>
    </button>
);

hamburgerIcon.propTypes = {
    clicked: PropTypes.func.isRequired
}

export default hamburgerIcon;