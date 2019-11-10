import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment-jalaali'
import DatePicker2 from 'react-datepicker2';

function DatePicker({value,format, ...restProps}) {
    //value = moment(value, format);
    return <DatePicker2 datePickerClass="form-control"
                        value={value}
                        {...restProps}
    />;
}

DatePicker.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    format: PropTypes.string,
    isGregorian: PropTypes.bool,
    onChange: PropTypes.func
};
DatePicker.defaultProps = {
    format: 'jYYYY/jM/jD',
    isGregorian: false,
    className:'form-control'
};

export default DatePicker;
