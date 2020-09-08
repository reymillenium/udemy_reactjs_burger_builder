import React, {Component} from "react";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import PropTypes from 'prop-types';

import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.scss';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState(
            {
                showSideDrawer: false
            }
        );
    }

    sideDrawerOpenHandler = () => {
        this.setState(
            {
                showSideDrawer: true
            }
        );
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            };
        });
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    show={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }

}

Layout.propTypes = {
    children: PropTypes.object
}

export default Layout;