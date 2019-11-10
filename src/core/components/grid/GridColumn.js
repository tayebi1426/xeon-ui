import  React from 'react'
import {GridColumn as KGridColumn } from '@progress/kendo-react-grid';


function GridColumn(props) {
    return <KGridColumn  {...props}/>
}

GridColumn.defaultProps = {
    editable:false
};

export default GridColumn;