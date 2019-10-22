import React from "react";
import PropTypes from "prop-types";
import {Formik} from "formik";
import FormContext from "./FormContext";
import DataValidator from "../../validation/DataValidator";
import {isFunction} from "../../util";


class Form extends React.Component {

    defaultFormValidate = (values) => {
        let {rules, onValidate} = this.props;
        if (!rules) {
            return {};
        }
        let validator = DataValidator.validate(values, rules);
        if (isFunction(onValidate)) {
            onValidate(validator);
        }
        if (validator.passes()) {
            return {};
        }
        return validator.errors.errors;
    };

    renderForm = (formProps) => {
        let {children, innerRef, ...restProps} = this.props;

        delete restProps.initialValues;
        delete restProps.onSubmit;
        delete restProps.validate;

        return <FormContext.Provider value={formProps}>
            <form ref={innerRef}
                  onSubmit={formProps.handleSubmit}
                  {...restProps}>
                {children}
            </form>
        </FormContext.Provider>
    };

    render() {
        let {initialValues, onSubmit, validate} = this.props;
        if (!validate) {
            validate = this.defaultFormValidate
        }
        return <Formik render={this.renderForm}
                       initialValues={initialValues}
                       onSubmit={onSubmit}
                       validate={validate}/>
    }
}

Form.propTypes = {
    title: PropTypes.string,
    validateOnChange: PropTypes.bool,
    validateOnBlur: PropTypes.bool,
    autoComplete: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    validate: PropTypes.func,
    onValidate: PropTypes.func,
    initialValues: PropTypes.object,
    innerRef: PropTypes.object,
    fieldLabels: PropTypes.object,
    children: PropTypes.node
};

Form.defaultProps = {
    validateOnChange: true,
    validateOnBlur: false,
    autoComplete: 'off',
};

export default Form;
