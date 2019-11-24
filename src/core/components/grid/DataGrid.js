import React from "react";
import {Grid as KGrid, GridColumn as KGridColumn, GridNoRecords} from '@progress/kendo-react-grid'
import {XhrRequest} from '../../util/index'
import {withTranslation} from '../../i18n/index'
import GridColumn from './GridColumn'
import GridCommands from './GridCommands'
import GridCommand from './GridCommand'
import GridToolbar from './GridToolbar'
import * as PropTypes from 'prop-types';
import {GridContext} from "./GridContext";
import {addSearchObjectToGridRequest} from "./createGridSearchObject";
import {GridIndexColumn} from "./GridIndexColumn";
import {GridSelectionColumn, headerSelectionChange, selectionChange} from "./GridSelectionColumn";
import {createFormatter} from './GridUtils'
import {I18Massage} from "../common";


class DataGrid extends React.Component {

    onSearchClicked = (searchObject) => {
        this.state.selectedItems.clear();
        const {readUrl, localData, skip, pageSize} = this.props;
        this.fetchGridData(readUrl, localData, skip, pageSize, searchObject);
    };

    state = {
        data: [],
        total: 0,
        take: this.props.pageSize,
        skip: this.props.skip,
        onSearchClicked: this.onSearchClicked,
        readUrl: this.props.readUrl,
        selectedItems: new Map()
    };

    dataStateChange = (e) => {
        this.fetchGridData(this.state.readUrl, this.props.localData, e.data.skip, e.data.take);
    };


    fetchGridData(readUrl, localData, skip, pageSize, searchObject) {
        let request = {skip, take: pageSize};
        if (searchObject) {
            request = addSearchObjectToGridRequest(searchObject, request);
        }

        if (localData) {
            this.fillGridData(request, localData.slice(skip, pageSize + skip), localData.length);
        } else if (readUrl) {
            XhrRequest.postRequest(readUrl, request).then(response => {
                this.fillGridData(request, response.data, response.total);
            });
        } else {
            this.fillGridData(request, [], 0);
        }
    }

    componentDidMount() {
        const {readUrl, localData, skip, pageSize} = this.props;
        this.fetchGridData(readUrl, localData, skip, pageSize);
    }

    componentWillReceiveProps(newProps) {

        // if (newProps.readUrl !== this.state.readUrl) {
        this.setState({readUrl: newProps.readUrl});
        const {readUrl, localData, skip, pageSize} = newProps;
        this.fetchGridData(readUrl, localData, skip, pageSize);
        // }
    }

    render() {
        let gridColumns = this.regenerateGridColumns();
        let gridToolbar = this.generateGridToolbar();
        return (
            <GridContext.Provider value={this.state}>
                {this.props.searchForm}
                {gridToolbar}
                <KGrid className="k-rtl"
                       onDataStateChange={this.dataStateChange}
                       onSelectionChange={e => selectionChange(e, this)}
                       onHeaderSelectionChange={e => headerSelectionChange(e, this)}
                       selectedField="selected"
                       {...this.props} {...this.state}>
                    <GridNoRecords>
                        <I18Massage code={'noDataText'}/>
                    </GridNoRecords>
                    {gridColumns}
                </KGrid>
            </GridContext.Provider>
        )
    }

    generateGridToolbar = () => {
        let {children} = this.props;
        let gridToolbar = React.Children.toArray(children).filter(child => child && child.type === GridToolbar);
        return (gridToolbar && gridToolbar.length > 0) ? gridToolbar[0] : null;
    };

    regenerateGridColumns() {
        let {children, showIndex, selectionMode} = this.props;
        let childrenArray = React.Children.toArray(children);
        let fieldColumns = childrenArray.filter(child => child && child.type === GridColumn);
        let gridCommands = childrenArray.filter(child => child && child.type === GridCommands);

        let gridColumns = fieldColumns.map(this.createFieldColumn.bind(this));
        if (showIndex) {
            gridColumns.splice(0, 0, GridIndexColumn(this.props));
        }
        if (selectionMode) {
            gridColumns.splice(0, 0, GridSelectionColumn(this.state.data));
        }

        if (gridCommands && gridCommands.length > 0) {
            gridColumns.push(this.createCommandColumn(gridCommands[0]));
        }
        return gridColumns;
    }

    createFieldColumn(child, idx) {
        let {t} = this.props;
        let {title, render, format, ...restProps} = child.props;
        if (format) {
            render = (props) => {
                return createFormatter(format, props.dataItem[props.field])
            }
        }
        return React.createElement(KGridColumn,
            {
                key: idx,
                title: t(title),
                cell: render,
                ...restProps
            });
    }

    createCommandColumn(gridCommands) {

        return React.createElement(KGridColumn,
            {
                key: -1,
                title: '',
                cell: this.createCustomCommandCell.bind(this, gridCommands)
            });
    }

    createCustomCommandCell(gridCommands, props) {
        let {children} = gridCommands.props;
        let actions = React.Children.toArray(children).map((child, idx) => {
            return React.createElement(GridCommand, {
                className: 'bagher',
                key: idx,
                ...child.props,
                ...props
            });
        });
        return <td>
            {actions}
        </td>
    }

    fillGridData(request, data, total) {
        if (this.props.selectionMode) {
            data.forEach(item => {
                item.selected = this.state.selectedItems.has(item.id);
            });
        }
        this.setState({
            data: data,
            total: total,
            take: request.take,
            skip: request.skip
        });
    }

}

DataGrid.propTypes = {
    localData: PropTypes.array,
    readUrl: PropTypes.string || PropTypes.func,
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({
        data: PropTypes.array,
        total: PropTypes.number
    })]),
    sortable: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
        mode: PropTypes.string,
        allowUnsort: PropTypes.bool
    })]),
    sort: PropTypes.array,
    onSortChange: PropTypes.func,
    filterable: PropTypes.bool,
    filter: PropTypes.object,
    onFilterChange: PropTypes.func,
    pageable: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
        buttonCount: PropTypes.number,
        info: PropTypes.bool,
        type: PropTypes.string,
        pageSizes: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.number)]),
        previousNext: PropTypes.bool,
    })]),
    pageSize: PropTypes.number,
    onPageChange: PropTypes.func,
    total: PropTypes.number,
    skip: PropTypes.number,
    // take: PropTypes.number,
    onExpandChange: PropTypes.func,
    expandField: PropTypes.string,
    selectedField: PropTypes.string,
    onSelectionChange: PropTypes.func,
    onHeaderSelectionChange: PropTypes.func,
    resizable: PropTypes.bool,
    reorderable: PropTypes.bool,
    group: PropTypes.any,
    groupable: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
        enabled: PropTypes.bool,
        footer: PropTypes.string
    })]),
    onGroupChange: PropTypes.func,
    onRowClick: PropTypes.func,
    onItemChange: PropTypes.func,
    editField: PropTypes.string,
    showIndex: PropTypes.bool,
    scrollable: PropTypes.string,
    rowHeight: PropTypes.number,
    detail: PropTypes.any,
    style: PropTypes.object,
    onDataStateChange: PropTypes.func,
    onColumnResize: PropTypes.func,
    onColumnReorder: PropTypes.func,
    searchForm: PropTypes.object,
    selectionMode: PropTypes.bool
};

DataGrid.defaultProps = {
    data: [],
    pageSize: 10,
    sortable: true,
    sort: [],
    filterable: false,
    filter: {},
    pageable: true,
    skip: 0,
    take: 10,
    resizable: false,
    reorderable: false,
    groupable: false,
    selectionMode: false,
};

export default withTranslation(DataGrid);