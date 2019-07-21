import React from "react";
import {Grid as KGrid, GridColumn as KGridColumn} from '@progress/kendo-react-grid'
import {withTranslation} from '../../lib'
import GridColumn from './GridColumn'
import {GridCommands,GridCommand} from './GridCommand'


class DataGrid extends React.Component {

    render() {
        let gridColumns = this.regenerateGridColumns();

        return <KGrid {...this.props}>
            {gridColumns}
        </KGrid>
    }

    regenerateGridColumns() {
        let {children} = this.props;
        let childrenArray = React.Children.toArray(children);
        let fieldColumns = childrenArray.filter(child => child && child.type === GridColumn);
        let gridCommands = childrenArray.filter(child => child && child.type === GridCommands)[0];

        let gridColumns = fieldColumns.map(this.createFieldColumn.bind(this));
        gridColumns.push(this.createActionColumn(gridCommands));
        return gridColumns;
    }

    createFieldColumn(child, idx) {
        let {t} = this.props;
        let {title, ...restProps} = child.props;
        return React.createElement(KGridColumn,
            {
                key: idx,
                title: t(title),
                ...restProps
            });
    }

    createActionColumn(gridCommands) {
        return React.createElement(KGridColumn,
            {
                key: -1,
                title: 'Actions',
                cell: this.createCustomCommandCell.bind(this, gridCommands)
            });
    }
    createCustomCommandCell (gridCommands, props) {
        let {children} = gridCommands.props;
        let actions = React.Children.toArray(children).map((child,idx) => {
            return React.createElement(GridCommand,{
                key:idx,
                ...child.props,
                ...props});
        });

        return <td>
            {actions}
        </td>
    }
}

export default withTranslation(DataGrid);

