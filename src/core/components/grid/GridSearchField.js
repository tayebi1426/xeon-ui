import React from 'react';
import * as PropTypes from 'prop-types';
import {Field} from "../form";

class GridSearchField extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        let {title} = this.props;
        if (!this.props.render) {
            return (<></>);
        }
        let {name} = this.props.render;
        return (
            <Field name={name} label={title}>
                {this.props.render}
            </Field>
        )
    }

}

GridSearchField.propTypes = {
    render: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    operator: PropTypes.oneOf(['eq', 'aeq', 'neq', 'gt', 'gte', 'lt', 'lte', 'startswith', 'endswith', 'contains', 'doesnotcontain']),
};

GridSearchField.defaultProps = {
    operator: 'aeq'
};

export default GridSearchField;