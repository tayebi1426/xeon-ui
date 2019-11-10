import React from "react";
import {Col as BsCol} from "reactstrap";
import PropTypes from 'prop-types'
const Col = (props) => (
    <BsCol {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']}/>
);
Col.propTypes ={
    className:PropTypes.string
};

export default Col;