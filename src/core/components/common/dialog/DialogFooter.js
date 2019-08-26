import  React from 'react'
import {ModalFooter} from "reactstrap";


function DialogFooter(props) {
    return <ModalFooter {...props}>
            {props.children}
    </ModalFooter>
}

export default DialogFooter;
