import React from "react";
import {GridColumn as KGridColumn} from '@progress/kendo-react-grid'

function GridIndexColumn({t}) {
    return React.createElement(KGridColumn,
        {
            cell: IndexCell,
            width: '40',
            headerCell: () => <span>{t('gridIndex')}</span>,
            key: 'indexGrid',
            className: 'grid-index',
            field: 'index',
            headerClassName: 'grid-index-header'
        });
}

function IndexCell({className, dataIndex}) {
    return (
        <td className={className}>
            {dataIndex}
        </td>
    );
}


export {GridIndexColumn};