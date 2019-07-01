import React  from 'react';
import { Col } from 'reactstrap';
import  Card  from './Card';

const Colxx = (props) => (
    <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />
);

const Separator = (props) => (
    <div className={`separator ${props.className}`}></div>
);

export {Card, Colxx,Separator }