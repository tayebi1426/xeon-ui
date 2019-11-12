import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Row = (props) => {
    const {
        className,
        noGutters,
        form,
        ...attributes
    } = props;

    const classes = classNames(
        className,
        noGutters ? 'no-gutters' : null,
        form ? 'form-row' : 'row'
    );

    return <div {...attributes} className={classes}/>
};

Row.propTypes = {
    noGutters: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    form: PropTypes.bool
};
Row.defaultProps = {
    form: true
};

export default Row;
