import React from "react";
import {GridColumn as KGridColumn} from '@progress/kendo-react-grid'

function GridIndexColumn({t}) {
    return React.createElement(KGridColumn,
        {
            cell: IndexCell,
            width: '50px',
            headerCell: (props) => IndexHeaderCell(t, props),
            key: 'indexGrid'
        });
}

function IndexCell(props) {
    return (
        <td>
            {props.dataIndex}
        </td>
    );
}

function IndexHeaderCell(t) {
    return (
        <span style={{fontSize: 'x-small'}}>{t('gridIndex')}</span>
    );
}

export {GridIndexColumn};