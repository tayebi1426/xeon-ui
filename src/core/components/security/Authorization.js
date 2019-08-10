import React, {Component} from "react";
import HasRole from '../../util/Security.js'
class Authorization extends Component{

    render() {
        return HasRole(this.props.access)? this.props.children : null;
    }
}
export default Authorization;
