import React from "react";
import '../../assets/sass/components/radioButton.scss'

export default class RadioGroups extends React.Component {

    render() {
        let {children, name, value, onChange, ...restProps} = this.props;
        let childArray = React.Children.toArray(children);
        let radioList = childArray.map((child) => {
            let childProps = {
                name: name,
                onChange: onChange,
                checked: child.props.value === value,
                ...child.props
            };
            return React.cloneElement(child, childProps);
        });
        return <div {...restProps}>
            {radioList}
        </div>
    }
}