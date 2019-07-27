import React from 'react'
import {CustomInput} from 'reactstrap'
import PropTypes from 'prop-types';

function Checkbox(props) {
    return <CustomInput {...props}/>
}

Checkbox.propTypes = {
    formGroupProps: PropTypes.object,
    model: PropTypes.object,
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    errorMessage: PropTypes.string
};

Checkbox.defaultProps = {
    type: 'checkbox',
    className: "custom-inputs"
};

export default Checkbox;