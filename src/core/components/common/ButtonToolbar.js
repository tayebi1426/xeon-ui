import React from 'react';
import {Row} from "../bootstrap";

export const ButtonToolbar = (props) => {
    return (<Row className={'m-3'}>
        {props.children}
    </Row>)
};