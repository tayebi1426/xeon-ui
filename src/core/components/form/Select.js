import React from 'react'
import PropTypes from 'prop-types';
import DropDownList from "react-select";

function Select(props) {
    return <DropDownList {...props}/>
}

Select.propTypes = {
    formGroupProps: PropTypes.object,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    data: PropTypes.array,
    keyField: PropTypes.string,
    textField: PropTypes.string,
    defaultOption: PropTypes.bool,
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
    placeholder: PropTypes.string,
    iconClassName: PropTypes.string,
    filterable: PropTypes.bool,
    delay: PropTypes.number,
};

Select.defaultProps = {
    dataItemKey: "id",
    textField: "name",
    defaultOption: true,
    filterable: false,
    className: "react-select",
    classNamePrefix: "react-select",
    delay: 3000
};
export default Select;
