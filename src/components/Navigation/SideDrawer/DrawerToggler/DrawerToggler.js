import React from "react";

const drawerToggler = (props) => (
    <div onClick={props.click}>
        {props.children}
    </div>
);

export default drawerToggler;