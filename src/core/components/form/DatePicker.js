import React from 'react';
import DatePicker2 from 'react-datepicker2';

function DatePicker({isGregorian = false, inputFormat = "YYYY/M/D", value='', ...restProps}){
    return <DatePicker2 datePickerClass="form-control"
                        className="form-control"
                        value={value}
                        inputFormat={inputFormat}
                        isGregorian={isGregorian}
                        {...restProps}
    />;
}
export default DatePicker;
