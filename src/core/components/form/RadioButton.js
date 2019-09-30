import React from "react";
import PropTypes from "prop-types";
import {CustomInput, FormGroup, Input} from "reactstrap";
import '../../assets/css/sass/components/radioButton.scss'
import Checkbox from "./Checkbox";


function RadioButton(props) {
    return <div className="custom-checkbox custom-control">
        <CustomInput {...props}/>
    </div>
}


RadioButton.propTypes = {
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

RadioButton.defaultProps = {
    type: 'radio',
    className: "custom-radio custom-control"
};

export default RadioButton;
