import React from 'react'
import {FormGroup} from 'reactstrap'
import PropTypes from 'prop-types';
import DropDownList from "react-select";

import "../../assets/css/sass/components/select.scss";
import Error from './FieldError'
import Label from "./Label";

export default class Select extends React.Component {

    render() {
        let {formGroupProps,id,name,label, errorMessage, ...restProps} = this.props;

        let _labelTag=null;
        if(label) {
            if (!id && name) {
                id = name;
            }
            _labelTag=<Label htmlFor={id} code={label}/>
        }

        return <FormGroup {...formGroupProps}>
            {_labelTag}
            <DropDownList {...restProps}/>
            {errorMessage ? <Error errorMessage={errorMessage}/> : null}
        </FormGroup>
    }
}

Select.propTypes = {
    formGroupProps: PropTypes.object,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func,
    data: PropTypes.array,
    keyField: PropTypes.string,
    textField: PropTypes.string,
    defaultOption: PropTypes.bool,
    className: PropTypes.string,
    classNamePrefix: PropTypes.string,
    placeholder: PropTypes.string,
    iconClassName: PropTypes.string,
    filterable: PropTypes.bool,
    delay: PropTypes.number,
};

Select.defaultProps = {
    dataItemKey: "id",
    textField: "name",
    defaultOption: true,
    filterable: false,
    className:"react-select",
    classNamePrefix:"react-select",
    formGroupProps: {className: 'col-4 col-xs-12'},
    delay: 3000
};