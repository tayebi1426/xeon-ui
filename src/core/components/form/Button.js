import React from "react";
import PropTypes from "prop-types";
import {Button as BsButton} from 'reactstrap';
import {I18Massage} from '../common/index'
import Icon from "../common/Icon";

const Button = ({isPrimary, link, title, visible, innerRef, icon, iconSize, ...restProps}) => {

    if (!visible) {
        return null;
    }
    isPrimary = isPrimary && !link;
    let btnColor = isPrimary ? 'primary' :
        (link) ? 'link' : 'secondary';
    return <BsButton innerRef={innerRef} color={btnColor} {...restProps} >
        {title && <I18Massage code={title}/>}
        {icon && <Icon code={icon} size={iconSize}/>}
    </BsButton>
};

Button.propTypes = {
    icon: PropTypes.string,
    iconSize: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'rest']),
    isPrimary: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary', 'link', 'success', 'white', 'black']),
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    link: PropTypes.bool,
    block: PropTypes.bool,
    size: PropTypes.oneOf(['lg', 'md','sm']),
    hidden: PropTypes.bool,
    innerRef: PropTypes.func,
    children: PropTypes.node
};
Button.defaultProps = {
    isPrimary: false,
    size: 'md',
    visible: true,
    className: 'x-btn',
    iconSize: '2x'
};

export default Button;