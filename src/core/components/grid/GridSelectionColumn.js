import {GridColumn as KGridColumn} from "@progress/kendo-react-grid";
import React from "react";

function GridSelectionColumn(data) {

    return React.createElement(KGridColumn,
        {
            field: "selected",
            width: "50px",
            headerSelectionValue: data.findIndex(dataItem => dataItem.selected === false) === -1
        });

}

function headerSelectionChange(event, grid) {
    const checked = event.syntheticEvent.target.checked;
    grid.state.data.forEach(item => item.selected = checked);
    grid.forceUpdate();
}

function selectionChange(event, grid) {
    event.dataItem.selected = !event.dataItem.selected;
    grid.forceUpdate();
}

export {GridSelectionColumn, headerSelectionChange, selectionChange};