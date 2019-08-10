import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Security from '../../util/Security'

function SecureRoute(props) {
    let {roles, ...restProps} = props;

    if (roles && roles.length > 0) {
        let userAccount = Security.getUserAccount();
        if (!userAccount) {
            return <Redirect to="/login"/>;
        }
        if (!Security.hasRole(roles)) {
            return <Redirect to="/401"/>;
        }
    }
    return <Route {...restProps}/>;
}

//SecureRoute.PropTypes = {};

export default SecureRoute;