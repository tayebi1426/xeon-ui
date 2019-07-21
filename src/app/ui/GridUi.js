import React from "react";
import {Card} from "../../core";
import {DataGrid,GridAction} from "../../core/components/grid";
import {withTranslation} from 'react-i18next';

const gridData = [
    {id: 1, name: 'A-15'},
    {id: 2, name: 'B-6'}
];
const PRODUCT_GRID_SCHEMA =
    {
        fields: [
            {field: "id", title: "product.id"},
            {field: "name", title: "product.name"},
        ],
        commands: []
    };

class GridUi extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Card title="Sample Grid">
                    <DataGrid columnSchema={PRODUCT_GRID_SCHEMA} data={gridData}>
                        <GridAction />
                    </DataGrid>
                </Card>
            </React.Fragment>
        );
    }

    /* render() {
        return (
            <React.Fragment>
                <Card title="Sample Grid">
                    <XGrid data={gridData}>
                        <GridColumn field="id" title={this.props.t('app:product.id')}/>
                        <GridColumn field="name" title={this.props.t('product.name')}/>
                    </XGrid>
                </Card>
            </React.Fragment>
        );
    }*/

}

export default withTranslation('app')(GridUi);