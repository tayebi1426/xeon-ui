import PropTypes from "prop-types";
import Security from './Security.js'

const Authorization = ({access, children}) => {
    return Security.hasAuthority(access) ? children : null;
};

Authorization.propTypes = {
    access: PropTypes.array
};

export default Authorization;
