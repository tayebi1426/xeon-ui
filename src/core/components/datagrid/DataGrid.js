import React from "react";
import PropTypes from 'prop-types';
import Table from "./table/Table";
import LocalDataSource from "./datasource/LocalDataSource";
import RemoteDataSource from "./datasource/RemoteDataSource";
import GridColumn from "./GridColumn";
import DataGridContext from './DataGridContext'
import DataGridPagination from './DataGridPagination'

class DataGrid extends React.Component {

    dataSource;

    onPageChange = (page) => {
        this.setState({page});
        this.readData(page);
    };

    readData = (page) => {
        this.dataSource.read(page, this.props.pageSize).then(this.onChangeDataState);
    };

    onChangeDataState = (dataResult, page) => {
        this.setState({data: dataResult.data, total: dataResult.total});
    };

    initDataSource = (props) => {
        return (props.data) ? new LocalDataSource(props.data) : new RemoteDataSource(props)
    };

    constructor(props) {
        super(props);
        this.dataSource = this.initDataSource(props);
        let schema = extractDataGridSchema(this.props.children);
        this.state = {
            schema: schema,
            data: [],
            total: 0,
            page: 1
        };
    }

    componentDidMount() {
        this.readData(this.state.page);
    }

    render() {
        let {pageSize} = this.props;
        let {schema, data, total, page} = this.state;
        console.debug('state : ', this.state);
        let dataGridContextValue = {
            schema,
            data,
            page:10,
            pageCount:10// Math.floor(total / pageSize)
        };
        //page={page} pageCount={Math.floor(total / pageSize)}
        return <DataGridContext.Provider value={dataGridContextValue}>
            <Table/>
            <DataGridPagination onPageChange={this.onPageChange}/>
        </DataGridContext.Provider>
    }
}

function extractDataGridSchema(children) {
    let childrenArray = React.Children.toArray(children);
    let fieldColumns = childrenArray.filter(child => child && child.type === GridColumn);
    return fieldColumns.map((col) => {
        return {...col.props}
    });
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

export default DataGrid;
