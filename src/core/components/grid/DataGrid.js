import React from "react";
import {Grid as KGrid, GridColumn as KGridColumn} from '@progress/kendo-react-grid'
import {withTranslation, XhrRequest} from '../../lib'
import GridColumn from './GridColumn'
import GridCommands from './GridCommands'
import GridCommand from './GridCommand'
import * as PropTypes from 'prop-types';


class DataGrid extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            total: 0,
            take: this.props.pageSize,
            skip: this.props.skip
        }
    }

    dataStateChange = (e) => {
        this.fetchData(e.data);
    };

    fetchData(dataState) {
        const {take, skip} = this.state;
        const request = dataState || {take, skip};

        const {localData, readUrl} = this.props;
        if (localData) {
            this.fillGridDate(request, localData.slice(request.skip, request.take + request.skip), localData.length);
        } else {
            XhrRequest.postRequest(readUrl, request).then(response => {
                this.fillGridDate(request, response.data, response.total);
            });
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        let gridColumns = this.regenerateGridColumns();

        return <KGrid onDataStateChange={this.dataStateChange} {...this.props} {...this.state}>
            {gridColumns}
        </KGrid>
    }

    regenerateGridColumns() {
        let {children} = this.props;
        let childrenArray = React.Children.toArray(children);
        let fieldColumns = childrenArray.filter(child => child && child.type === GridColumn);
        let gridCommands = childrenArray.filter(child => child && child.type === GridCommands)[0];

        let gridColumns = fieldColumns.map(this.createFieldColumn.bind(this));
        gridColumns.push(this.createCommandColumn(gridCommands));
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

    createCommandColumn(gridCommands) {
        let {t} = this.props;

        return React.createElement(KGridColumn,
            {
                key: -1,
                title: t('commands'),
                cell: this.createCustomCommandCell.bind(this, gridCommands)
            });
    }

    createCustomCommandCell(gridCommands, props) {
        let {children} = gridCommands.props;
        let actions = React.Children.toArray(children).map((child, idx) => {
            return React.createElement(GridCommand, {
                key: idx,
                ...child.props,
                ...props
            });
        });
        return <td>
            {actions}
        </td>
    }

    fillGridDate(request, data, total) {
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
    readUrl: PropTypes.string,
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
    scrollable: PropTypes.string,
    rowHeight: PropTypes.number,
    detail: PropTypes.any,
    style: PropTypes.object,
    onDataStateChange: PropTypes.func,
    onColumnResize: PropTypes.func,
    onColumnReorder: PropTypes.func
};

DataGrid.defaultProps = {
    data: [],
    pageSize: 10,
    sortable: true,
    sort: [],
    filterable: true,
    filter: {},
    pageable: true,
    skip: 0,
    take: 10,
    resizable: false,
    reorderable: false,
    groupable: false,
};

export default withTranslation(DataGrid);

