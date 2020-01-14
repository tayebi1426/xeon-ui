import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import Security from './Security'

function SecureRoute(props) {
    let {authorities, ...restProps} = props;

    if (authorities && authorities.length > 0) {
        let userAccount = Security.getUserAccount();
        if (!userAccount) {
            return <Redirect to="/login"/>;
        }
        if (!Security.hasAuthority(authorities)) {
            return <Redirect to="/401"/>;
        }
    }
    return <Route {...restProps}/>;
}

SecureRoute.propTypes = {
    authorities:PropTypes.array
};

export default SecureRoute;
