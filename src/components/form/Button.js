import React from "react";
import PropTypes from "prop-types";
import {Button as BsButton} from 'reactstrap';

export default class Button extends React.Component {
    static SIZE = {sm: 'sm', md: 'md', lg: 'lg'};

    render() {
        let {isPrimary, link, title, children, visible,innerRef, ...rest} = this.props;
        if (!visible) {
            return null;
        }
        isPrimary = isPrimary && !link;

        let btnColor = isPrimary ? 'primary' :
            (link) ? 'link' : 'secondary';
        return (
            <BsButton innerRef={innerRef} color={btnColor} {...rest}>
                {title}
                {children}
            </BsButton>
        );
    }
}

Button.propTypes = {
    isPrimary: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    link: PropTypes.bool,
    block: PropTypes.bool,
    size: PropTypes.string,
    hidden: PropTypes.bool,
    innerRef:PropTypes.func,
};
Button.defaultProps = {
    isPrimary: false,
    size: 'lg',
    visible: true

};
