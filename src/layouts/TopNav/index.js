import React, {Component} from "react";
import MenuButton from './MenuButton'
//import NavBarSearch from './NavBarSearch'
import NavBarLogo from './NavBarLogo'
import UserProfile from './UserProfile'
import {NotificationContainer} from 'react-notifications';


class TopNav extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <NotificationContainer/>
                <MenuButton toggleMenuState={this.props.toggleMenuState}/>
                {/*<NavBarSearch/>*/}
                <UserProfile/>
                <NavBarLogo/>
            </nav>
        );
    }
}

export default TopNav;
