import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardTitle = (props) => {
    const {
        className,
        ...attributes
    } = props;
    const classes = classNames(
        className,
        'card-title'
    );

    return (
        <div {...attributes} className={classes} />
    );
};

CardTitle.propTypes = {
    className: PropTypes.string,
    cssModule: PropTypes.object,
};
CardTitle.defaultProps = {

};

export default CardTitle;
