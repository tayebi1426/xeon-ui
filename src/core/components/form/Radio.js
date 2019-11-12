import React from "react";
import PropTypes from "prop-types";
import {CustomInput, Input} from "reactstrap";

function Radio(props) {
    return <div className=' form-check-input custom-radio custom-control'>
        <Input {...props}/>
        <label className='custom-control-label'>{props.label}</label>
    </div>

}

function Radio1(props) {
    console.debug(' dd : ', props.onChange);
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
    type: 'radio',
    className: " custom-control-input"
};

export default Radio;
