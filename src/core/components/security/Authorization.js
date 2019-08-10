import React, {Component} from "react";
import Security from '../../util/Security.js'

class Authorization extends Component{

    render() {
        return Security.hasRole(this.props.access)? this.props.children : null;
    }
}
export default Authorization;
