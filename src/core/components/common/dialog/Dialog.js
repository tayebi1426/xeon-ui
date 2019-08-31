import React from "react";
import PropTypes from "prop-types";
import {
    Modal,
    ModalHeader
} from "reactstrap";

import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";

function Dialog({children, className, isOpen, size, title,toggle, ...restProps}) {
    let childrenArray = React.Children.toArray(children);
    let dialogBody = childrenArray.filter(child => child && child.type === DialogBody);
    let dialogFooter = childrenArray.filter(child => child && child.type === DialogFooter);
    return (

        <Modal isOpen={isOpen} size={size}>
            <ModalHeader toggle={toggle}>
                {title}
            </ModalHeader>
            {dialogBody}
            {dialogFooter}
        </Modal>
    )
}

Dialog.propTypes = {
    isOpen: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    toggle: PropTypes.func
};

Dialog.defaultProps = {
    className: '',
    title: '',
    size: 'sm',
    isOpen: false
};

export default Dialog;
