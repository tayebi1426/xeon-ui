import React from "react";
import Table from "./table/Table";
import GridColumn from "./GridColumn";
import GridCommands from "../grid/GridCommands";
import SampleData from './SampleData'
import DataGridContext from './DataGridContext'
import DataGridPagination from './DataGridPagination'
import PropTypes from 'prop-types';

class DataGrid extends React.Component {

    dataSource;

    onPageChange = (page) => {
        this.readData(page);
    };
    readData = (page) => {
        let dataResult = this.dataSource.read(page, this.props.pageSize);
        this.setState({data: dataResult.data, total: dataResult.total, page: page});
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            total: 0,
            page: 1
        };

        if (props.data) {
            this.dataSource = new LocalDataSource(props.data);
        }
    }

    componentDidMount() {
        this.readData(this.state.page);
    }

    render() {
        let {children, pageSize} = this.props;
        let {data, total,page} = this.state;
        let schema = extractDataGridSchema(children);
        //let data = dataProvider();
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

class RemoteDataSource {

}

class LocalDataSource {

    read = (page, pageSize) => {
        let start = (page - 1) * pageSize;
        return {
            data: this.data.slice(start, start + pageSize),
            total: this.data.length
        }
    };

    constructor(data) {
        this.data = data;
    }
}

export default DataGrid;
