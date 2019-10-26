import React from "react";
import PropTypes from "prop-types";
import {Button as BsButton} from 'reactstrap';
import {I18Massage} from '../common'

export default class Button extends React.Component {

    render() {

        let {isPrimary, link, title, children, visible, innerRef, icon, ...rest} = this.props;
        if (!visible) {
            return null;
        }
        isPrimary = isPrimary && !link;
        let btnColor = isPrimary ? 'primary' :
            (link) ? 'link' : 'secondary';
        return (
            <BsButton innerRef={innerRef} color={btnColor} {...rest} >
                <span><I18Massage code={title}/>{icon && <i style={{margin: '3px', padding: '5px'}} className={icon}/>}</span>
                {children}
            </BsButton>
        );
    }
}

Button.propTypes = {
    icon: PropTypes.string,
    type: PropTypes.oneOf(['submit','button','rest']),
    isPrimary: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf(['primary','secondary','link']),
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    link: PropTypes.bool,
    block: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    hidden: PropTypes.bool,
    innerRef: PropTypes.func,
    children: PropTypes.node
};
Button.defaultProps = {
    isPrimary: false,
    size: 'lg',
    visible: true,
    className: 'xeon-btn'
};
