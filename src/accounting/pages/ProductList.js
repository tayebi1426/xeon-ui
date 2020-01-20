import React from "react";
import {Button, Card, EditCommand, GridCommand, GridCommands, GridToolbar, withTranslation} from "../../core";
import {DataGrid, GridColumn} from "../../core/components/datagrid";
import productData from './product'

class ProductList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Card title="Account List">
                    <DataGrid data={productData}
                              editField="inEdit"
                              showIndex={true}
                              selectionMode={true}>
                        <GridToolbar>
                            <Button title={'selected'} onClick={this.getSelectedItems}/>
                        </GridToolbar>

                        <GridColumn field="ProductID" title="product.id"/>
                        <GridColumn field="ProductName" title="product.name" format={'currency'}/>
                        <GridColumn field="UnitsInStock" title="product.UnitsInStock"/>
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

export default withTranslation(ProductList);