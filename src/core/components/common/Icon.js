import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Icon = (props) => {
    let {code, ...restProps} = props;
    return <FontAwesomeIcon icon={code} {...restProps} />
};
Icon.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(["xs", "sm", "lg", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
};
export default Icon;