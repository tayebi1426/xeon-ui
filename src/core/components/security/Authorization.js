import React from "react";
import PropTypes from "prop-types";
import Security from '../../util/Security.js'

const Authorization = ({access, children}) => {
    return Security.hasRole(access)? children : null;
};

Authorization.propTypes = {
    access: PropTypes.array
};

export default Authorization;
