import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";
import {Nav, NavItem} from "reactstrap";
import I18Massage from '../../components/common/I18Massage'

class Sidebar extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            //this.toggle();
            window.scrollTo(0, 0);
        }
        this.handleProps();
    }

    componentDidMount() {
        // window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount() {
        //window.removeEventListener("resize", this.handleWindowResize);
    }

    render() {
        return (
            <div className="sidebar">
                <div className="main-menu">
                    <div className="scroll">
                        {/*{this.renderSidebarMenu()}*/}
                    </div>
                </div>
           {/*     <div className="sub-menu">
                    <div className="scroll">
                        <PerfectScrollbar>

                        </PerfectScrollbar>
                    </div>
                </div>*/}
            </div>
        );
    }

    renderSidebarMenu() {

        return <PerfectScrollbar option={{suppressScrollX: true, wheelPropagation: false}}>
            <Nav vertical className="list-unstyled">
                <NavItem className="active">
                    <NavLink
                        to="/app/dashboards/default"
                        onClick={e => null}
                    >
                        <i className="iconsminds-shop-4"/>{" "}
                        <I18Massage code="menu.dashboards"/>
                    </NavLink>
                </NavItem>
            </Nav>
        </PerfectScrollbar>
    }
}

export default withRouter(Sidebar);
