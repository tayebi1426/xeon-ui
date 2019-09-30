import React from 'react'
import {CustomInput} from 'reactstrap'
import PropTypes from 'prop-types';

function Checkbox(props) {
    return <div className="custom-checkbox custom-control">
              <CustomInput {...props}/>
           </div>
}

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
    type: 'checkbox',
    className: "custom-checkbox custom-control"
};

export default Checkbox;
