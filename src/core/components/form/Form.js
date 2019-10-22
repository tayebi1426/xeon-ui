import React from "react";
import PropTypes from "prop-types";
import Validator from "validatorjs";
import "../../assets/css/sass/components/form.scss";
import {Formik} from "formik";
import FormContext from "./FormContext";

Validator.useLang('fa');

class Form extends React.Component {

    renderForm = (formProps) => {
        let {children, innerRef, ...restProps} = this.props;

        delete restProps.initialValues;
        delete restProps.onSubmit;
        delete restProps.validate;

        return <FormContext.Provider value={formProps}>
            <form ref={innerRef} onSubmit={formProps.handleSubmit} {...restProps}>
                {children}
            </form>
        </FormContext.Provider>
    };

    render() {
        let {initialValues,onSubmit,validate}=this.props;
        return <Formik render={this.renderForm}
                       initialValues={initialValues}
                       onSubmit={onSubmit}
                       validate={validate}
                       >

        </Formik>
    }
}

Form.propTypes = {
    title: PropTypes.string,
    autoComplete: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    validate: PropTypes.func,
    initialValues: PropTypes.object,
    innerRef: PropTypes.object,
    children: PropTypes.node
};

Form.defaultProps = {
    autoComplete: 'off',
};

export default Form;
