import React from 'react'
import PropTypes from "prop-types";
import {FormGroup} from 'reactstrap'
import Label from "./Label";
import '../../assets/sass/components/textarea.scss';
import Error from "./FieldError";

export default class TextArea extends React.Component {
    render() {
        let {formGroupProps, name, label, value, errorMessage, ...restProps} = this.props;

        return <FormGroup style={{paddingTop: '20px'}} {...formGroupProps}>
            <Label htmlFor={name} className="textarea-label">
                <span>{value && value.length > 0 ? label : ' '}</span>
            </Label>
            <textarea name={name} placeholder={label} value={value} {...restProps}/>
            {errorMessage ? <Error errorMessage={errorMessage}/> : null}
        </FormGroup>
    }
}

TextArea.propTypes = {
    formGroupProps: PropTypes.object,
    name: PropTypes.string.isRequired,
    rows: PropTypes.number,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any
};

TextArea.defaultProps = {
    formGroupProps: {className: 'col-4 col-xs-12'},
    rows: 3,
};
