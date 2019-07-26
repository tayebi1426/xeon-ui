import React, {Component} from "react";
import MenuButton from './MenuButton'
import NavBarSearch from './NavBarSearch'
import NavBarLogo from './NavBarLogo'
import UserProfile from './UserProfile'

class TopNav extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <MenuButton toggleMenuState={this.props.toggleMenuState}/>
                <NavBarSearch/>
                <UserProfile/>
                <NavBarLogo/>
            </nav>
        );
    }
}

export default TopNav;
