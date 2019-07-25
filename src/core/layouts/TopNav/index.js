import React, {Component} from "react";
import MenuButton from './MenuButton'
import NavBarSearch from './NavBarSearch'
import NavBarLogo from './NavBarLogo'

class TopNav extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <MenuButton/>
                <NavBarSearch/>
                <NavBarLogo/>
            </nav>
        );
    }
}

export default TopNav;
