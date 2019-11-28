import React from 'react';
import PropTypes from 'prop-types';

const CardBody = (props) => {
    return <div {...props}/>
};

CardBody.propTypes = {
    className: PropTypes.string
};
CardBody.defaultProps = {
    className: 'card-body'
};

export default CardBody;
