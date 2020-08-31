import React from "react";

import classes from './backdrop.module.scss';

const backdrop = (props) => (
    props.show ?
        <div className={classes.Backdrop} onClick={props.backdrop_click}></div> : null
);

export default backdrop;