import React from "react";
import PropTypes from 'prop-types';
import Label from '../form/Label';

function LabelAndValue({label, value}) {

    return (
        <div>
            <Label code={label} className="text-bold">
                &nbsp;:
            </Label>
            &nbsp;&nbsp;{value}
        </div>
    )
}

LabelAndValue.protoTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default LabelAndValue;