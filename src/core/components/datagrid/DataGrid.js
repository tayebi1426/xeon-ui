import React from "react";
import PropTypes from 'prop-types';
import Table from "./table/Table";
import LocalDataSource from "./datasource/LocalDataSource";
import RemoteDataSource from "./datasource/RemoteDataSource";
import GridColumn from "./GridColumn";
import GridCommands from "../grid/GridCommands";
import SampleData from './SampleData'
import DataGridContext from './DataGridContext'
import DataGridPagination from './DataGridPagination'

class DataGrid extends React.Component {

    dataSource;

    onPageChange = (page) => {
        this.readData(page);
    };
    readData = (page) => {
        this.dataSource.read(page, this.props.pageSize, this.changeDataState);
    };
    changeDataState = (dataResult, page) => {
        console.debug('readData : ',dataResult);
        this.setState({data: dataResult.data, total: dataResult.total, page: page});
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            total: 0,
            page: 1
        };

        this.dataSource = (props.data) ? new LocalDataSource(props.data) : new RemoteDataSource(props);
    }

    componentDidMount() {
        this.readData(this.state.page);
    }

    render() {
        let {children, pageSize} = this.props;
        let {data, total, page} = this.state;
        let schema = extractDataGridSchema(children);
        let dataGridContextValue = {
            schema,
            data
        };
        return <DataGridContext.Provider value={dataGridContextValue}>
            <Table/>
            <DataGridPagination page={page} pageCount={Math.floor(total / pageSize)} onPageChange={this.onPageChange}/>
        </DataGridContext.Provider>
    }
}

function extractDataGridSchema(children) {
    let childrenArray = React.Children.toArray(children);
    let fieldColumns = childrenArray.filter(child => child && child.type === GridColumn);
    let gridCommands = childrenArray.filter(child => child && child.type === GridCommands);
    let schema = fieldColumns.map((col) => {
        return {...col.props}
    });
    return schema;
}

DataGrid.propTypes = {
    total: PropTypes.number,
    remoteUrl: PropTypes.string,
    data: PropTypes.array,
    pageable: PropTypes.bool,
    style: PropTypes.object,
    pageSize: PropTypes.number
};
DataGrid.defaultProps = {
    pageSize: 10
};

function dataProvider() {
    return {
        total: 1000,
        data: SampleData
    }
}


export default DataGrid;
