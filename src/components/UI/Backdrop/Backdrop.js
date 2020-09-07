import React from "react";
import PropTypes from 'prop-types';

import classes from './backdrop.module.scss';

const backdrop = (props) => (
    props.show ?
        <div className={classes.Backdrop} onClick={props.backdrop_click}></div> : null
);

backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    backdrop_click: PropTypes.func.isRequired
}

export default backdrop;