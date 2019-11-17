import React from "react";
import PropTypes from "prop-types";
import {Formik} from "formik";
import FormContext from "./FormContext";
import DataValidator from "../../validation/DataValidator";
import {isFunction} from "../../util/index";
import {Row} from '../bootstrap'


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
        let {children, innerRef, className, toolbar: ToolBar} = this.props;
        return <FormContext.Provider value={formProps}>
            <form ref={innerRef} className={className}
                  onSubmit={formProps.handleSubmit}>
                {children}
                <Row className='mt-4 mb-2'>
                    <ToolBar/>
                </Row>
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
