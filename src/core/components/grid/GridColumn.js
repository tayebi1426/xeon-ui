import React from 'react'
import {GridColumn as KGridColumn} from '@progress/kendo-react-grid';
import * as PropTypes from 'prop-types';


function GridColumn(props) {
    return <KGridColumn  {...props}/>
}

GridColumn.defaultProps = {
    editable: false
};

GridColumn.propTypes = {
    title: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    render: PropTypes.func
};

export default GridColumn;