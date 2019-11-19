import React from "react";
import PropTypes from "prop-types";
import {CustomInput} from "reactstrap";

function Radio(props) {
    return <CustomInput {...props}/>
}

Radio.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    step: PropTypes.number,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    errorMessage: PropTypes.string
};

Radio.defaultProps = {
    type: 'radio'
};

export default Radio;
