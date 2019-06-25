import React from "react";
import PropTypes from "prop-types";
import {FormGroup, Input} from "reactstrap";
import '../../assets/sass/components/radioButton.scss'


export default class RadioButton extends React.Component {

    render() {
        let {formGroupProps, label, ...inputProps} = this.props;

        return <FormGroup {...formGroupProps}>
            <label className="radio-container">
                {label}
                <Input type='radio' {...inputProps}/>
                <span className="checkmark"/>
            </label>
        </FormGroup>
    }
}

RadioButton.propTypes = {
    formGroupProps: PropTypes.object,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

RadioButton.defaultProps = {
    formGroupProps: {className: 'col-2', inline: true},
};
