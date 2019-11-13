import React from "react";
import PropTypes from "prop-types";
//import '../../assets/css/sass/components/radioButton.scss'
import I18Massage from "../common/I18Massage";
import Label from "../form/Label";

 class RadioGroup extends React.Component {

    render() {
        let {title,children, name, value, onChange, ...restProps} = this.props;

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
            {title && <Label code={title}/>}
            {radioList}
        </div>
    }
}
RadioGroup.protoType={
    title:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value:PropTypes.string,
    onChange:PropTypes.func,
};

export default RadioGroup;