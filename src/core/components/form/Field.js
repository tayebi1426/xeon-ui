import React from 'react'
import PropTypes from 'prop-types';
import {FormGroup} from 'reactstrap'
import Label from "./Label";
import {withTranslation} from "../../i18n/index";
import FormContext from "./FormContext";
import ErrorMessage from "./FieldError";

class Field extends React.Component {

    render() {
        let formContext = this.context;
        let {id, label, name, placeholder, children, t, ...restProps} = this.props;
        id = id || name;
        placeholder = placeholder && t(placeholder);

        let child = React.Children.only(children);

        let filed = React.cloneElement(child, {
            id,
            name,
            placeholder,
            value: formContext.values[name],
            onChange: formContext.handleChange,
            ...child.props
        }, child.props.children);

        delete restProps.tReady;
        delete restProps.i18n;

        return <FormGroup {...restProps}>
            {label && <Label htmlFor={id} code={label}/>}
            {filed}
            <ErrorMessage fieldName={name}/>
        </FormGroup>

    }
}

Field.propTypes = {
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

Field.defaultProps = {
    className: 'col-4 col-xs-12',
};
Field.contextType = FormContext;
export default withTranslation(Field);
