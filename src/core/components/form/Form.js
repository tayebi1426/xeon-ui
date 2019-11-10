import React from "react";
import PropTypes from "prop-types";
import {Formik} from "formik";
import FormContext from "./FormContext";
import DataValidator from "../../validation/DataValidator";
import {isFunction} from "../../util/index";


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
        let {children, innerRef} = this.props;

        return <FormContext.Provider value={formProps}>
            <form ref={innerRef}
                  onSubmit={formProps.handleSubmit}>
                {children}
            </form>
        </FormContext.Provider>
    };

    render() {
        let {
            initialValues, onSubmit, validate, validateOnChange,
            validateOnBlur
        } = this.props;
        if (!validate) {
            validate = this.defaultFormValidate
        }
        return <Formik render={this.renderForm}
                       initialValues={initialValues}
                       onSubmit={onSubmit}
                       validate={validate}
                       validateOnChange={validateOnChange}
                       validateOnBlur={validateOnBlur}
        />
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
