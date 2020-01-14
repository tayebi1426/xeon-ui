import React from 'react'

import * as PropTypes from 'prop-types';


function GridColumn(props) {

}

GridColumn.defaultProps = {
    editable: false,
};

GridColumn.propTypes = {
    title: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    width: PropTypes.number,
    render: PropTypes.func,
    format: PropTypes.oneOf(['date', 'dateTime', 'currency'])

};

export default GridColumn;