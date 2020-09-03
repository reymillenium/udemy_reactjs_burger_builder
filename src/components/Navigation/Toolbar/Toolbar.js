import React from "react";
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
            </ul>
        </nav>
    </header>
);

export default toolbar;