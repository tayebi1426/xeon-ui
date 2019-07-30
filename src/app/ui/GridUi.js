import React from "react";

import {Card, withTranslation} from "../../core";
import {DataGrid, EditCommand, GridColumn, GridCommand, GridCommands} from "../../core/components/grid";
import Button from "reactstrap/es/Button";

const gridData = [
    {id: 1, name: 'A-15'},
    {id: 2, name: 'B-6'},
    {id: 3, name: 'B-7'},
    {id: 4, name: 'B-8'},
    {id: 5, name: 'B-9'},
    {id: 6, name: 'B-10'},
    {id: 7, name: 'B-11'},
    {id: 8, name: 'B-12'},
    {id: 9, name: 'B-13'},
    {id: 10, name: 'B-14'},
    {id: 11, name: 'B-15'},
    {id: 13, name: 'B-16'}
];

class GridUi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {skip: 0, take: 10};
        this.bindGridData = this.bindGridData.bind(this);
    }

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

    bindGridData() {
        this.setState({fetchData: true, readUrl: 'https://localhost:7002/acc-ws/test/bankList'});
    }

    render() {

        return (
            <React.Fragment>

                <Button onClick={this.bindGridData}/>

                <Card title="Sample Grid">
                    <DataGrid readUrl={this.state.readUrl}>
                        <GridColumn field="id" title="product.id"/>
                        <GridColumn field="name" title="product.name"/>
                        <GridColumn field="code" title="product.code"/>
                        <GridCommands>
                            <EditCommand onClick={this.handleEditItem}/>
                            <GridCommand icon="trash-alt" title="delete" onClick={this.handleDeleteItem}/>
                            <GridCommand icon="tools" title="delete" onClick={this.handleDeleteItem}/>
                        </GridCommands>
                    </DataGrid>
                </Card>
            </React.Fragment>
        );
    }

}

export default withTranslation(GridUi);