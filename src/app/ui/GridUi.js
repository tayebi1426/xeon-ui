import React from "react";
import {Card} from "../../core";
import {DataGrid,GridColumn,GridCommands,GridCommand,EditCommand} from "../../core/components/grid";

import {withTranslation} from 'react-i18next';

const gridData = [
    {id: 1, name: 'A-15'},
    {id: 2, name: 'B-6'}
];

class GridUi extends React.Component {

    handleEditItem=(prop)=>{
        console.debug('handleEditItem : ',prop);
    };

    handleDeleteItem=(prop)=>{
        console.debug('handleEditItem : ',prop);
    };

    render() {
        return (
            <React.Fragment>
                <Card title="Sample Grid">
                    <DataGrid  data={gridData}>
                        <GridColumn field="id" title="product.id"/>
                        <GridColumn field="name" title="product.name"/>
                        <GridCommands>
                            <EditCommand onClick={this.handleEditItem} />
                            <GridCommand icon="trash-alt" title="delete" onClick={this.handleDeleteItem}/>
                        </GridCommands>
                    </DataGrid>
                </Card>
            </React.Fragment>
        );
    }

}

export default withTranslation('app')(GridUi);