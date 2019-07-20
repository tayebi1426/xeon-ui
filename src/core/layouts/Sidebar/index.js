import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class Sidebar extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.toggle();
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
                <div className="main-menu" style={{backgroundColor: 'royalblue'}}>
                    <div className="scroll">

                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(Sidebar);
