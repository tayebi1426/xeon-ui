import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Button as BsButton} from 'reactstrap';
import {I18Massage} from '../common/index'
import Icon from "../common/Icon";

const Button = ({isPrimary, link, title, visible, icon, iconSize, color,className, ...restProps}) => {

    if (!visible) {
        return null;
    }

    let btnColor = color ? color : link ? 'link' : isPrimary ? 'primary' :'secondary';

    return <BsButton color={btnColor} className={classnames(className,Button.defaultProps.className)}
                     {...restProps} >
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
    color: PropTypes.oneOf(['primary', 'secondary', 'link', 'success', 'white', 'black', 'danger', 'warning', 'light', 'info']),
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    link: PropTypes.bool,
    block: PropTypes.bool,
    size: PropTypes.oneOf(['lg', 'md', 'sm','xs']),
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