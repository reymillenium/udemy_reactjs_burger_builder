import React from "react";

import Auxiliary from './../../hoc/Auxiliary';
import classes from './Layout.module.scss';

const layout = (props) => (
    <Auxiliary>
        <div>Layout: Toolbar, SideBar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;