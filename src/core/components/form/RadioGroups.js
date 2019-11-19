import React from "react";
import PropTypes from "prop-types";

class RadioGroup extends React.Component {

    render() {
        let {title, children, name, value, onChange, ...restProps} = this.props;

        let childArray = React.Children.toArray(children);

        let radioList = childArray.map((child, index) => {
            let childProps = {
                id: name + '_' + index,
                name: name,
                checked: child.props.value === value,
                onChange: onChange,
                ...child.props
            };
            return React.cloneElement(child, childProps, child.props.children);
        });

        return <div id={145} {...restProps}>
            {radioList}
        </div>
    }
}

RadioGroup.protoType = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default RadioGroup;