import React from 'react'
import PropTypes from 'prop-types';
import {FormGroup} from 'reactstrap'
import Label from "./Label";
import {withTranslation} from "../../util";

function Field({id, name,placeholder, label, children,t,error, ...restProps}) {

    id = id || name;
    placeholder=placeholder&&t(placeholder);

    let child = React.Children.only(children);
    let filed = React.cloneElement(child, {id, name,placeholder, ...child.props}, child.children);
    delete restProps.tReady;
    return <FormGroup {...restProps}>
        <Label htmlFor={id} code={label}/>
        {filed}
        {error && <div className="text-danger my-1">{error}</div>}
    </FormGroup>
}

Field.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    errorMessage: PropTypes.string
};

Field.defaultProps={
    className: 'col-4 col-xs-12',
};

export default withTranslation(Field);
