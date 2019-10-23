import React from "react";

import {Card, withTranslation,Button} from "../../core";
import {DataGrid, EditCommand, GridColumn, GridCommand, GridCommands} from "../../core/components/grid";


const gridData = [
    {id: 1, code: 'A1', name: 'A-1'},
    {id: 2, code: 'B2', name: 'B-2'},
    {id: 3, code: 'B3', name: 'B-3'},
    {id: 4, code: 'B4', name: 'B-4'},
    {id: 5, code: 'B5', name: 'B-5'},
    {id: 6, code: 'B6', name: 'B-6'},
    {id: 7, code: 'B7', name: 'B-7'},
    {id: 8, code: 'B8', name: 'B-8'},
    {id: 9, code: 'B9', name: 'B-9'},
    {id: 10, code: 'B10', name: 'B-10'},
    {id: 11, code: 'B11', name: 'B-11'},
    {id: 13, code: 'B12', name: 'B-12'}
];

class GridUi extends React.Component {

    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    };
    handleEditItem = ({dataItem}) => {
        console.debug('handleEditItem : ', dataItem);
    };
    handleDeleteItem = ({dataItem}) => {
        console.debug('handleEditItem : ', dataItem);
    };

    constructor(props) {
        super(props);
        this.state = {skip: 0, take: 10};
        this.bindGridData = this.bindGridData.bind(this);
    }

    bindGridData() {
        this.setState({fetchData: true, readUrl: 'https://localhost:7002/acc-ws/test/bankList'});
    }

    render() {
        return (
            <React.Fragment>

                <Button title="bind data" color="primary" onClick={this.bindGridData}/>

                <Card title="Sample Grid">
                    <DataGrid localData={gridData}>
                        <GridColumn field="id" title="product.id"/>
                        <GridColumn field="code" title="product.code"/>
                        <GridColumn field="name" title="product.name"/>
                        <GridCommands>
                            <EditCommand onClick={this.handleEditItem}/>
                           {/* <GridCommand icon="spinner" title="delete" onClick={this.handleDeleteItem}/>
                            <GridCommand icon="spinner" title="delete" onClick={this.handleDeleteItem}/>*/}
                        </GridCommands>
                    </DataGrid>
                </Card>
            </React.Fragment>
        );
    }

}

export default withTranslation(GridUi);