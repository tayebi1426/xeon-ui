import React from 'react';
import { Col } from 'reactstrap';
const Col = (props) => (
    <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />
);
const Separator = (props) => (
    <div className={`separator ${props.className}`}></div>
);
export { Col,Separator }