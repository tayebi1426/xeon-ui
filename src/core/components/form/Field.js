import React from 'react'
import PropTypes from 'prop-types';
import {FormGroup} from 'reactstrap'
import Label from "./Label";
import {withTranslation} from "../../i18n/index";
import FormContext from "./FormContext";
import ErrorMessage from "./FieldError";
import {Input} from "./index";
import DatePicker from "./DatePicker";

const DATE_PICKER_TYPE = 'date';

class Field extends React.Component {

    handelChange = (e, onChange) => {
        let formContext = this.context;
        formContext.handleChange(e);
        if (onChange) {
            onChange(e);
        }
    };

    render() {
        let formContext = this.context;
        let {id, label, name, placeholder, children, t, type, className, ...restProps} = this.props;

        id = id || name;
        placeholder = placeholder && t(placeholder);
        const commonAttributes = {
            id,
            name,
            type,
            placeholder,
            value: formContext.values[name]
        };
        let fieldContent = null;
        if (children) {
            const child = React.Children.only(children);
            const {onChange, ...childRestProps} = child.props;
            fieldContent = React.cloneElement(child, {
                onChange: e => this.handelChange(e, onChange),
                ...commonAttributes,
                ...childRestProps
            }, child.props.children);
        } else if (type) {
            let childTag = DATE_PICKER_TYPE === type.toString() ? DatePicker : Input;
            fieldContent = React.createElement(childTag, {onChange: formContext.handleChange, ...commonAttributes, ...restProps});
        }

        return <FormGroup className={className}>
            {label && <Label htmlFor={id} code={label}/>}
            {fieldContent}
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
