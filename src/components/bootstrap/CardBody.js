import React from 'react';
import PropTypes from 'prop-types';
import {classNames} from '../../util';

const CardBody = (props) => {
    const {
        className,
        innerRef,
        ...attributes
    } = props;
    const classes = classNames(className, 'card-body');
    return <div {...attributes} className={classes} ref={innerRef}/>
};

CardBody.propTypes = {
    className: PropTypes.string,
    cssModule: PropTypes.object,
    innerRef: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.func,
    ]),
};
CardBody.defaultProps = {};

export default CardBody;
