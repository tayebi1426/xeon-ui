import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
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
    authorities: PropTypes.array,
    exact: PropTypes.bool
};

SecureRoute.defaultProps = {
    exact:true
};

export default SecureRoute;
