import React from 'react';
import PropTypes from "prop-types";
import DatePicker2 from 'react-datepicker2';
import jMoment from 'moment-jalaali'
import {isFunction} from "../../util";
import {connect as formikConnect} from 'formik';

class DatePicker extends React.Component {

    handleChange = (moment) => {
        this.setState({moment});
        let {formik, name} = this.props;
        let {setFieldValue} = formik;
        if (isFunction(setFieldValue)) {
            setFieldValue(name, moment.toString());
        }
    };

    constructor(props) {
        super(props);
        let {value, jFormat} = props;
        this.state = {
            moment: value ? jMoment(value, jFormat) : null
        }
    }

    render() {
        let {jFormat, ...restProps} = this.props;
        delete restProps.value;
        delete restProps.onChange;
        delete restProps.formik;
        delete restProps.children;
        return <DatePicker2 {...restProps}
                            inputJalaaliFormat={jFormat}
                            value={this.state.moment}
                            onChange={this.handleChange}/>;
    }
}

DatePicker.propTypes = {
    value: PropTypes.string,
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
