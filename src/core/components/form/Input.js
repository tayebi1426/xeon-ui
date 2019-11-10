import React from 'react'
import {Input as BsInput} from 'reactstrap'
import PropTypes from 'prop-types';

function Input(props) {
    return <BsInput  {...props}/>
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
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

Input.defaultProps = {
    type: 'text',
    className: "x-input"
};

export default Input;