import React from 'react';
import PropTypes from "prop-types";
import DatePickerz from 'react-datepicker2';

function DatePicker({isGregorian = false, inputFormat = "YYYY/M/D", ...restProps}){
    return <DatePickerz datePickerClass="form-control"
                        className="form-control"
                        inputFormat={inputFormat}
                        isGregorian={isGregorian}
                        {...restProps}
    />;
}
DatePicker.PropTypes = {
    isGregorian: PropTypes.bool,
    inputFormat: PropTypes.string
};
export default DatePicker;
