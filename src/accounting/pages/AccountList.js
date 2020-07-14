import React from "react";
import {Button, Card, withTranslation} from "../../core";
import {DataGrid, GridColumn} from "../../core/components/datagrid";

class AccountList extends React.Component {

    render() {
        return <Card title="acc.accountList">
            <DataGrid readUrl={'http://localhost:9001/account/list'}
                      editField="inEdit"
                      showIndex={true}
                      selectionMode={true}>
                {/*<GridToolbar>
                    <Button title={'selected'} onClick={this.getSelectedItems}/>
                </GridToolbar>
*/}
                <GridColumn field="name" title="product.id"/>
                <GridColumn field="balance" title="product.name" format={'currency'}/>
                <GridColumn field="createdDate" title="product.createdDate" format={'dateTime'}/>
               {/* <GridCommands>
                    <EditCommand/>
                    <GridCommand icon="trash-alt" title="delete"/>
                </GridCommands>*/}
            </DataGrid>
        </Card>
    }
}

export default withTranslation(AccountList);