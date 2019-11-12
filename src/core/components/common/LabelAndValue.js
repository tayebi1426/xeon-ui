import React from "react";
import PropTypes from 'prop-types';
import {Col} from '../bootstrap';
import I18Massage from "./I18Massage";
import jMoment from 'moment-jalaali';

function LabelAndValue({label, value, format}) {
    let val = value;
    if (format && value) {
        switch (format) {
            case 'currency':
                break;
            case 'date':

                val = jMoment(value, 'jYYYY/jM/jD');
                console.debug('val : ',val.locale('fa'));
                console.debug('val : ',val.locale('fa').format('jYYYY/jM/jD'));
                break;
        }
    }
    return (
        <Col>
            <I18Massage code={label}/> &nbsp;:&nbsp;&nbsp;
            <span><b>{value}</b></span>
        </Col>
    )
}

LabelAndValue.protoTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
    format: PropTypes.oneOf(['currency', 'date', 'dateTime']),
};

export default LabelAndValue;