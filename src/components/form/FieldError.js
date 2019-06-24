import React from "react";
import PropTypes from "prop-types";

export default class FieldError extends React.Component {

    render() {
        let {errorMessage} = this.props;
        return <span className="error-msg" style={{color: 'red'}}>{errorMessage}</span>
    }
}
FieldError.propTypes={
    errorMessage:PropTypes.string
};