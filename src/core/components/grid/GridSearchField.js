import React from 'react';
import * as PropTypes from 'prop-types';
import {Field, Input} from "../form";

class GridSearchField extends React.Component {

    render() {
        let {title, name, children, type} = this.props;
        if (!name && !children) {
            return null;
        }
        let element;
        if (children) {
            element = children;
        } else {
            element = <Input type={type} name={name}/>;
        }
        return (
            <Field name={name} label={title}>
                {element}
            </Field>
        )
    }

}

GridSearchField.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    operator: PropTypes.oneOf(['eq', 'aeq', 'neq', 'gt', 'gte', 'lt', 'lte', 'startswith', 'endswith', 'contains', 'doesnotcontain']),
};

GridSearchField.defaultProps = {
    operator: 'aeq',
    type: 'text'
};

export default GridSearchField;