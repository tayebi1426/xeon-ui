import React from "react";
import PropTypes from "prop-types";
import FormContext from "./FormContext";

function ErrorMessage({fieldName, errorMessage}) {

    return <FormContext.Consumer>
        {({errors}) => {
            if (errors && errors[fieldName]) {
                errorMessage = errors[fieldName][0];
            }
            return errorMessage && <span className="error-msg" style={{color: 'red'}}>{errorMessage}</span>
        }
        }
    </FormContext.Consumer>
}

ErrorMessage.propTypes = {
    fieldName: PropTypes.string,
    errorMessage: PropTypes.string
};

export default ErrorMessage;