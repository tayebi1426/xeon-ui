import React from "react";
import moment from 'moment-jalaali'; // Notice here !
import "imrc-datetime-picker/dist/imrc-datetime-picker.css";
import "../../assets/sass/components/datepicker.scss";
import {DatetimePickerTrigger} from 'imrc-datetime-picker';
import Input from './Input'
import {FormGroup} from "reactstrap";

const JALALI_FORMAT = 'jYYYY/jMM/jDD';
const FA_LOCALE = 'fa';
moment.loadPersian({
    dialect: "persian-modern",
    usePersianDigits: true
});
const defaultMoment = moment();
defaultMoment.locale(FA_LOCALE);
defaultMoment.format(JALALI_FORMAT);

export default class DatePicker extends React.Component {

    state = {
        moment: defaultMoment
    };

    render() {
        let {moment} = this.state;
        let {formGroupProps, onChange, ...restProps} = this.props;
        return <FormGroup {...formGroupProps}>
            <DatetimePickerTrigger moment={moment}
                                   className="date-picker"
                                   splitPanel={false}
                                   showTimePicker={false}
                                   isSolar={true}
                                   lang={FA_LOCALE}
                                   closeOnSelectDay={true}
                                   format={JALALI_FORMAT}
                                   onChange={(moment) => {
                                       this.setState({moment});
                                       if (onChange) {
                                           onChange(moment.format(JALALI_FORMAT));
                                       }
                                   }}>
                <Input formGroupProps={{className: '_row'}} style={{width: '100%'}} {...restProps}
                       autoComplete="off"/>
            </DatetimePickerTrigger>
        </FormGroup>
    }
}
DatePicker.defaultProps = {
    className: "custom-inputs",
    formGroupProps: {className: 'col-4 col-xs-12'},
};