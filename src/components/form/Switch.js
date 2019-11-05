import React from "react";
import RcSwitch from "rc-switch";
import "rc-switch/assets/index.css";

import Label from "./Label";

class  Switch extends React.Component{
    render() {

        let {id, name, label} = this.props;
        let _labelTag = null;
        if (label) {
            if (!id && name) {
                id = name;
            }
            _labelTag = <Label htmlFor={id} code={label}/>
        }
        return <React.Fragment>
            {_labelTag}
            <RcSwitch {... this.props}/>
        </React.Fragment>


    }
}
Switch.propTypes = {};
Switch.defaultProps = {
    className: "custom-switch custom-switch-primary"
};

export default Switch;
