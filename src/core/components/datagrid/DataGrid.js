import React from "react";
import Table from "./Table";
import GridColumn from "./GridColumn";
import GridCommands from "../grid/GridCommands";
import SampleData from './SampleData'


class DataGrid extends React.Component {

    render() {
        let {children} = this.props;
        let tableSchema=extractDataGridSchema(children);
        let tableData=dataProvider();
        return <Table schema={tableSchema} data={tableData} />
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

function dataProvider() {
    return {
        total: 1000,
        data: SampleData
    }
}

export default DataGrid;
/*
[
{title:'sdfs',format:'currency'}
]

*/