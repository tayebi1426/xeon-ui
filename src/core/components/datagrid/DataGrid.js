import React from "react";
import Table from "./table/Table";
import GridColumn from "./GridColumn";
import GridCommands from "../grid/GridCommands";
import SampleData from './SampleData'
import DataGridContext from './DataGridContext'
import DataGridPagination from './DataGridPagination'
import PropTypes from 'prop-types';

class DataGrid extends React.Component {

    dataProvider;

    constructor(props) {
        super(props);
        this.state = {
            products: { data: [], total: 0 },
            dataState: { take: 10, skip: 0 }
        };
    }
    onDataStateChange =  (e) => {
        this.setState({
            ...this.state,
            dataState: e.data
        });
    };

    componentDidMount() {
    }
    dataReceived = (products) => {
        this.setState({
            ...this.state,
            products: products
        });
    };

    render() {
        let {children, data,total,pageSize} = this.props;
        let schema = extractDataGridSchema(children);
        //let data = dataProvider();
        let dataGridContextValue = {
            schema,
            data
        };
        return <DataGridContext.Provider value={dataGridContextValue}>
            <Table/>
            <DataGridPagination pageCount={Math.floor(total/pageSize)} onDataStateChange={this.onDataStateChange}/>
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
    console.log(schema);
    return schema;
}

DataGrid.propTypes = {
    total: PropTypes.number,
    remoteUrl: PropTypes.string,
    data: PropTypes.array,
    pageable: PropTypes.bool,
    style: PropTypes.object,
    pageSize:PropTypes.number
};

function dataProvider() {
    return {
        total: 1000,
        data: SampleData
    }
}

export default DataGrid;
