import {Grid as KGrid,GridColumn} from '@progress/kendo-react-grid'
import React from "react";

class DataGrid extends React.Component {

    render() {
        let {columnSchema,...restProps}=            this.props;
        //let columns=children
        let gridColumns=columnSchema.map((schema)=>{
            return React.createElement(GridColumn,schema);
        });
        return <KGrid {...restProps}>
            {gridColumns}
        </KGrid>
    }

}

export default DataGrid;

