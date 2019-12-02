import React from "react";
import PropTypes from 'prop-types';
import {Col} from '../bootstrap';
import I18Massage from "./I18Massage";

function LabelAndValue({label, value, format}) {
    return (
        <Col lg={4} md={6} sm={6} xs={12} className="p-1">
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