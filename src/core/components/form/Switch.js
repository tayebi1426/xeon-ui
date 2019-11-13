import React from "react";
import RcSwitch from "rc-switch";
import "rc-switch/assets/index.css";

class  Switch extends React.Component{
    render() {
        return <RcSwitch {... this.props}/>
    }
}
Switch.propTypes = {};
Switch.defaultProps = {
    className: "custom-switch custom-switch-primary"
};

export default Switch;
