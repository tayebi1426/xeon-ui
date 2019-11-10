import React from "react";
import PropTypes from "prop-types";

const TextArea = (props) => {
    return <textarea {...props}/>
};

TextArea.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any
};
TextArea.defaultProps={
    className:'x-textarea form-control'
};

export default TextArea;