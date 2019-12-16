import {GridColumn as KGridColumn} from "@progress/kendo-react-grid";
import React from "react";

function GridSelectionColumn(data) {

    return React.createElement(KGridColumn,
        {
            field: "selected",
            width:'40',
            headerSelectionValue: data && data.length > 0 && data.findIndex(dataItem => {
                return !(dataItem.selected)
            }) === -1,
            className: 'grid-selection text-center',
            key: 'gridSelection',
            headerClassName: 'grid-selection-header'
        });

}

function headerSelectionChange(event, grid) {
    const checked = event.syntheticEvent.target.checked;
    const {selectedItems} = grid.state;
    grid.state.data.forEach(item => {
        item.selected = checked;
        if (checked) {
            selectedItems.set(item.id, item);
        } else {
            selectedItems.delete(item.id);
        }
    });
    grid.forceUpdate();
}

function selectionChange(event, grid) {
    event.dataItem.selected = !event.dataItem.selected;
    const {selectedItems} = grid.state;
    if (event.dataItem.selected) {
        selectedItems.set(event.dataItem.id, event.dataItem);
    } else {
        selectedItems.delete(event.dataItem.id);
    }
    grid.forceUpdate();
}

export {GridSelectionColumn, headerSelectionChange, selectionChange};