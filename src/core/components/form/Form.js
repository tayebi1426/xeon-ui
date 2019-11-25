import React from "react";
import PropTypes from "prop-types";
import {Formik} from "formik";
import FormContext from "./FormContext";
import DataValidator from "../../validation/DataValidator";
import {isFunction} from "../../util/index";
import {Row} from '../bootstrap'


class Form extends React.Component {

    defaultFormValidate = (values) => {
        let {validationRules, onValidate} = this.props;
        if (!validationRules) {
            return {};
        }
        let validator = DataValidator.validate(values, validationRules);
        if (isFunction(onValidate)) {
            onValidate(validator);
        }
        if (validator.passes()) {
            return {};
        }
        return validator.errors.errors;
    };
    renderToolbar = () => {
        let {toolbar: Toolbar} = this.props;

        if (!isFunction(Toolbar)) {
            return Toolbar;
        }
        return <Row className='mb-2'>
            <Toolbar/>
        </Row>
    };

    renderForm = (formikProps) => {
        let {children, innerRef, className} = this.props;
        return <FormContext.Provider value={formikProps}>
            <form ref={innerRef} className={className}
                  onReset={formikProps.handleReset}
                  onSubmit={formikProps.handleSubmit}>
                {children}
                {this.renderToolbar()}
            </form>
        </FormContext.Provider>
    };

    render() {
        let {
            initialValues, onSubmit, validate = this.defaultFormValidate
            , validateOnChange, validateOnBlur
        } = this.props;

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
    validateOnChange: PropTypes.bool,
    validateOnBlur: PropTypes.bool,
    autoComplete: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    validate: PropTypes.func,
    onValidate: PropTypes.func,
    initialValues: PropTypes.object,
    validationRules: PropTypes.object,
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    fieldLabels: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string
};

Form.defaultProps = {
    validateOnChange: true,
    validateOnBlur: false,
    autoComplete: 'off',
    className: 'x-form'
};

export default Form;
