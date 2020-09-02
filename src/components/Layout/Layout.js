import React from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';

import Auxiliary from './../../hoc/Auxiliary';
import classes from './Layout.module.scss';

const layout = (props) => (
    <Auxiliary>
        <Toolbar/>
        {/*<div>Layout: SideBar </div>*/}
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;