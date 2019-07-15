import React from 'react'
import {CustomInput, FormGroup} from 'reactstrap'
import PropTypes from 'prop-types';
import "../../assets/css/sass/components/inputText.scss";
import Error from './FieldError'

class Checkbox extends React.Component {

    render() {
        let {formGroupProps, ...restProps} = this.props;

        return <FormGroup {...formGroupProps}>
            <CustomInput {...restProps}/>
        </FormGroup>
    }

    renderErrors() {
        let {errorMessage} = this.props;
        return errorMessage ? <Error errorMessage={errorMessage}/> : null;
    }
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
    className: "custom-inputs",
    formGroupProps: {className: 'col-4 col-xs-12'},
};

export default Checkbox;