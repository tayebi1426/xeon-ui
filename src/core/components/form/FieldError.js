import React from "react";
import PropTypes from "prop-types";
import FormContext from "./FormContext";


export default class FieldError extends React.Component {

    render() {
        let {fieldName,errorMessage} = this.props;
        let formContext = this.context;
        if(formContext && fieldName){
            errorMessage=formContext.errors[fieldName];
        }
        return <span className="error-msg" style={{color: 'red'}}>{errorMessage}</span>
    }
}
FieldError.contextType = FormContext;

FieldError.propTypes={
    fieldName:PropTypes.string,
    errorMessage:PropTypes.string
};
