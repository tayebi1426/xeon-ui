import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import DatePicker2 from 'react-datepicker2';
import jMoment from 'moment-jalaali'
import {isFunction} from "../../util";
import {connect as formikConnect} from 'formik';
import '../../assets/css/sass/components/datepicker.scss'
import {gregorianToJalaliWithEnNumbering} from "../../util/gregorainToJalali";

function DatePicker(props) {

    let {value, jFormat, ...restProps} = props;
    const [moment, setMoment] = useState(value ? jMoment(gregorianToJalaliWithEnNumbering(value), jFormat) : null);

    const handleChange = (moment) => {
        setMoment(moment);
        let {formik, name} = props;
        let {setFieldValue} = formik;
        if (isFunction(setFieldValue)) {
            setFieldValue(name, new Date(moment.toString()));
        }
    };

    useEffect(() => {
        delete restProps.value;
        delete restProps.onChange;
        delete restProps.formik;
        delete restProps.children;
    });

    return (<DatePicker2 {...restProps}
                         inputJalaaliFormat={jFormat}
                         value={moment}
                         onChange={handleChange}/>);
}

DatePicker.propTypes = {
    value: PropTypes.object,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    jFormat: PropTypes.string,
    isGregorian: PropTypes.bool,
    onChange: PropTypes.func
};

DatePicker.defaultProps = {
    jFormat: 'jYYYY/jM/jD',
    isGregorian: false,
    className: 'form-control'
};

export default formikConnect(DatePicker);
