import React from "react";
import {Col as _Col} from "reactstrap";
import PropTypes from 'prop-types'
const Col = (props) => (
    <_Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']}/>
);
Col.propTypes ={
    className:PropTypes.string
};

export default Col;