import React from 'react'
import {FormGroup, Input as BsInput} from 'reactstrap'
import PropTypes from 'prop-types';
import "../../assets/css/sass/components/inputText.scss";
import Error from './FieldError'
import Label from "./Label";
import {withTranslation} from "../../lib";

class Input extends React.Component {

    render() {
        let {formGroupProps, id, name, label, placeholder,t, ...restProps} = this.props;
        let _labelTag = null;
        if (label) {
            if (!id && name) {
                id = name;
            }
            _labelTag = <Label htmlFor={id} code={label}/>
        }
        if (placeholder) {
            placeholder = t(placeholder);
        }
        return <FormGroup {...formGroupProps}>
            {_labelTag}
            <BsInput id={id} name={name} placeholder={placeholder}  {...restProps}/>
        </FormGroup>
    }

    renderErrors() {
        let {errorMessage} = this.props;
        return errorMessage ? <Error errorMessage={errorMessage}/> : null;
    }
}

Input.propTypes = {
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

Input.defaultProps = {
    type: 'text',
    className: "custom-inputs",
    formGroupProps: {className: 'col-4 col-xs-12'},
};

export default withTranslation(Input);