import React, { Component } from "react";
import ReactDOM from "react-dom";
import {I18Massage} from "../../index";
//import PerfectScrollbar from "react-perfect-scrollbar";
import { withRouter,NavLink } from "react-router-dom";


class Sidebar extends Component {



  handleDocumentClick(e) {

  }

  getContainer() {
    return ReactDOM.findDOMNode(this);
  }

  toggle() {

  }

  handleProps() {
    this.addEvents();
  }

  addEvents() {
    ["click", "touchstart"].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  removeEvents() {
    ["click", "touchstart"].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }


  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.toggle();
      window.scrollTo(0, 0);
    }
    this.handleProps();
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);

    this.handleProps();

  }

  componentWillUnmount() {
    this.removeEvents();
    window.removeEventListener("resize", this.handleWindowResize);
  }


  render() {
    return (
      <div className="sidebar">
        <div className="main-menu" style={{backgroundColor: 'royalblue'}}>
          <div className="scroll">
              <NavLink to="/test">Test Form</NavLink>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Sidebar);
