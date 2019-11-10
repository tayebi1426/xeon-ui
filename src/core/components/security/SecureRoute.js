import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import Security from './Security'

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

SecureRoute.propTypes = {
    roles:PropTypes.array
};

export default SecureRoute;
