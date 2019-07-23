import React from "react";

import {Card,withTranslation} from "../../core";
import {DataGrid, EditCommand, GridColumn, GridCommand, GridCommands} from "../../core/components/grid";

const gridData = [
    {id: 1, name: 'A-15'},
    {id: 2, name: 'B-6'}
];

class GridUi extends React.Component {

    handleEditItem = ({dataItem}) => {
        console.debug('handleEditItem : ', dataItem);
    };

    handleDeleteItem = ({dataItem}) => {
        console.debug('handleEditItem : ', dataItem);
    };

    render() {
        return (
            <React.Fragment>
                <Card title="Sample Grid">
                    <DataGrid data={gridData}>
                        <GridColumn field="id" title="product.id"/>
                        <GridColumn field="name" title="product.name"/>
                        <GridCommands>
                            <EditCommand onClick={this.handleEditItem}/>
                            <GridCommand icon="trash-alt" title="delete" onClick={this.handleDeleteItem}/>
                        </GridCommands>
                    </DataGrid>
                </Card>
            </React.Fragment>
        );
    }

}

export default withTranslation(GridUi);