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

    render() {
        let {
            initialValues, onSubmit, validate = this.defaultFormValidate
            , validateOnChange, validateOnBlur,
            children, innerRef, className,
            toolbar
        } = this.props;

        return <Formik initialValues={initialValues}
                       onSubmit={onSubmit}
                       validate={validate}
                       validateOnChange={validateOnChange}
                       validateOnBlur={validateOnBlur}
                       render={(formikProps) => {
                           return <FormContext.Provider value={formikProps}>
                               <form ref={innerRef} className={className}
                                     onReset={formikProps.handleReset}
                                     onSubmit={formikProps.handleSubmit}>
                                   <FormToolbar content={toolbar}/>
                                   {children}
                               </form>
                           </FormContext.Provider>
                       }}
        />
    }
}

const FormToolbar = ({content}) => {
    if (!isFunction(content)) {
        return null;
    }
    return <Row className='mb-2'>
        {content()}
    </Row>
};

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
    className: PropTypes.string,
    toolbar :PropTypes.func
};

Form.defaultProps = {
    validateOnChange: true,
    validateOnBlur: false,
    autoComplete: 'off',
    className: 'x-form'
};

export default Form;
