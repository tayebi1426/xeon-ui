import React from "react";
import {Grid as KGrid, GridColumn as KGridColumn} from '@progress/kendo-react-grid'
import {withTranslation, XhrRequest} from '../../util'
import GridColumn from './GridColumn'
import GridCommands from './GridCommands'
import GridCommand from './GridCommand'
import * as PropTypes from 'prop-types';
import gregorianToJalali from "../../util/gregorainToJalali";

class DataGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            total: 0,
            take: this.props.pageSize,
            skip: this.props.skip,
            readUrl: this.props.readUrl,
            jalali: props.jalali,
            row: props.row
        };
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

    fetchGridData(readUrl, localData, skip, pageSize) {
        const request = {skip, take: pageSize};
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

    fillGridData(request, data, total) {
        let {jalali, row} = this.state;
        let customData = data.map(item => Object.assign({inEdit: true}, item));
        customData = jalali ? customData.map(item => {
                jalali.forEach(date => {
                    item[date] = gregorianToJalali(item[date])
                });
                return item;
            })
            : customData;
        customData = row ? customData.map((item, index) => {
            item['rowId'] = index + 1;
            return item;
        }) : customData;
        this.setState({
            data: customData,
            total: total,
            take: request.take,
            skip: request.skip
        });
    }

    dataStateChange = (e) => {
        console.log("e",e);
        this.fetchGridData(this.state.readUrl, this.props.localData, e.data.skip, e.data.take);
    };

    addRowColumn = () => {
        return React.createElement(KGridColumn,
            {
                title: 'ردیف',
                field: "rowId",
                editable: false
            })
    };

    render() {
        let gridColumns = this.regenerateGridColumns();
        return <KGrid className="k-rtl"
                      onDataStateChange={this.dataStateChange}
                      editField="inEdit"
                      onItemChange={this.itemChange}
                      {...this.props}
                      {...this.state}
        >
            {gridColumns}
        </KGrid>
    }

    regenerateGridColumns() {
        let {children, row} = this.props;
        let childrenArray = React.Children.toArray(children);
        let fieldColumns = childrenArray.filter(child => child && child.type === GridColumn);
        let gridCommands = childrenArray.filter(child => child && child.type === GridCommands);

        let gridColumns = fieldColumns.map(this.createFieldColumn.bind(this));

        if (gridCommands && gridCommands.length > 0) {
            gridColumns.push(this.createCommandColumn(gridCommands[0]));
        }

        if (row) {
            let rowColumn = this.addRowColumn();
            gridColumns = [rowColumn, ...gridColumns];
        }
        return gridColumns;
    }

    createFieldColumn(child, idx) {
        let {t} = this.props;
        let {title,percent,...restProps} = child.props;
        return React.createElement(KGridColumn,
            {
                key: idx,
                title: t(title),
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
                key: idx,
                ...child.props,
                ...props
            });
        });
        return (
            <td className={"d-flex justify-content-center"}>
                {actions}
            </td>
        )
    }

    itemChange = (e) => {
        e.dataItem[e.field] = e.value;
        let skip = this.state.skip;
        let item = e.dataItem;
        let index = e.dataItem.id-1;
        this.props.changeData(item,index,skip);
        };
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
    pageSize:10,
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
    row: false

};

export default withTranslation(DataGrid);

