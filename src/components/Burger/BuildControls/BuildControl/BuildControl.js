import React from "react";
import PropTypes from 'prop-types';

import classes from './BuildControl.module.scss';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabledLessButton}>Less
        </button>
        <button
            className={classes.More}
            onClick={props.added}
            disabled={props.disabledMoreButton}>More
        </button>
        <div className={classes.Label}>x {parseFloat(props.ingredient_price).toFixed(2)} USD</div>
    </div>
);

buildControl.propTypes = {
    label: PropTypes.string.isRequired,
    removed: PropTypes.func.isRequired,
    disabledLessButton: PropTypes.bool.isRequired,
    disabledMoreButton: PropTypes.bool.isRequired,
    added: PropTypes.func.isRequired,
    ingredient_price: PropTypes.number.isRequired
}

export default buildControl;