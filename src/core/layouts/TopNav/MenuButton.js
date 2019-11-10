import React from "react";
import {NavLink} from "react-router-dom";

function MenuButton(props) {
    return <React.Fragment>
        <NavLink
            to="#"
            className="menu-button d-none d-md-block"
            onClick={e => props.toggleMenuState()}>
            <svg
                className="main"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 9 17"            >
                <rect x="0.48" y="0.5" width="7" height="1"/>
                <rect x="0.48" y="7.5" width="7" height="1"/>
                <rect x="0.48" y="15.5" width="7" height="1"/>
            </svg>
            <svg
                className="sub"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 17"            >
                <rect x="1.56" y="0.5" width="16" height="1"/>
                <rect x="1.56" y="7.5" width="16" height="1"/>
                <rect x="1.56" y="15.5" width="16" height="1"/>
            </svg>
        </NavLink>
        <NavLink
            to="#"
            className="menu-button-mobile d-xs-block d-sm-block d-md-none"
            onClick={e => props.toggleMenuState()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
                <rect x="0.5" y="0.5" width="25" height="1"/>
                <rect x="0.5" y="7.5" width="25" height="1"/>
                <rect x="0.5" y="15.5" width="25" height="1"/>
            </svg>
        </NavLink>
    </React.Fragment>
}

export default MenuButton;