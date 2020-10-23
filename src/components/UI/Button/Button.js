import React from "react";
import classes from './Button.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

const button = (props) => (
    <button
        onClick={props.clicked}
        // className={[classes.Button, classes[props.buttonType]].join(' ')}>
        // Other way of using multiple classnames with CSS Modules in React (classnames package)
        className={cx(classes.Button, classes[props.buttonType])}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);

button.propTypes = {
    clicked: PropTypes.func,
    buttonType: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default button;