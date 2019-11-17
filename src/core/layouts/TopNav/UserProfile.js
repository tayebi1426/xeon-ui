import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import React from "react";
import img from '../../assets/img/profile-pic-l-2.jpg'
function UserProfile() {
   return <div className="user d-inline-block">
        <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
                <span className="name mr-1">Jo Aby</span>
                <span>
                  <img alt="Profile" src={img} />
                </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Features</DropdownItem>
                <DropdownItem>History</DropdownItem>
                <DropdownItem>Support</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => {}}>
                    Sign out
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </div>
}
export default UserProfile;