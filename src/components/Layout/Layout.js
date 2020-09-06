import React, {Component} from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import Auxiliary from './../../hoc/Auxiliary';
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

export default Layout;