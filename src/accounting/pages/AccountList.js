import React from "react";
import {
    Button,
    Card,
    DataGrid,
    EditCommand,
    GridColumn,
    GridCommand,
    GridCommands,
    GridToolbar,
    withTranslation
} from "../../core";

class AccountList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Card title="Account List">
                    <DataGrid readUrl={'http://localhost:9001/account/list'}
                              editField="inEdit"
                              showIndex={true}
                              selectionMode={true}>
                        <GridToolbar>
                            <Button title={'selected'} onClick={this.getSelectedItems}/>
                        </GridToolbar>

                        <GridColumn field="id" title="product.id" />
                        <GridColumn field="name" title="product.name" />
                        <GridColumn field="balance" title="product.name" format={'currency'}/>
                        <GridCommands>
                            <EditCommand/>
                            <GridCommand icon="trash-alt" title="delete"/>
                        </GridCommands>
                    </DataGrid>
                </Card>
            </React.Fragment>
        );
    }
}

export default withTranslation(AccountList);