import  React from 'react'
import {ModalBody} from "reactstrap";


function DialogBody(props) {
    return <ModalBody {...props}>
        {props.children}
    </ModalBody>
}

export default DialogBody;
