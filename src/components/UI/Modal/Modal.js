import React, {Component} from "react";
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

import classes from './Modal.module.scss';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Modal] -> shouldComponentUpdate');
        return (nextProps.show !== this.props.show);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Modal] -> componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Modal] -> componentDidUpdate');
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop
                    show={this.props.show}
                    backdrop_click={this.props.modalClosed}/>

                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}
                >
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
}

Modal.propTypes = {
    modalClosed: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
}
export default Modal;