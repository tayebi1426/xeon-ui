import React from "react";
import {Card, Grid, GridColumn} from "../../core/index";
import {GridCell} from "@progress/kendo-react-grid";
import Button from "../../core/components/form/Button";
import {XGrid, GridAction} from "../../core/components/grid";
import { withTranslation } from 'react-i18next';
const gridData = [
    {id: 1, name: 'A-15'},
    {id: 2, name: 'B-6'}
];

class GridUi extends React.Component {

    handleEditAction = (arg) => {
        console.log(" handleEditAction: ", arg);
    };

    render() {
        console.log('e : ',this.props.t('product.id'));
        return (
            <React.Fragment>
                <Card title="Sample Grid">
                    <XGrid data={gridData}>
                        <GridColumn field="id" title={this.props.t('app:product.id')}/>
                        <GridColumn field="name" title={this.props.t('product.name')}/>
                        {/*<GridColumn cell={CellAction}/>*/}
                        <GridCommands title="Edit" onClick={this.handleEditAction} />
                    </XGrid>
                </Card>
            </React.Fragment>
        );
    }

}

class GridCommands extends React.Component {

    constructor(props) {
        super(props);
        console.log(' : ', props);
        //props.cell=CommandCreator;
    }

    render() {
        return <GridColumn title="dfdffdddddff"/>;
    }

}

class CellAction extends GridCell {

    render() {
        let {title, onClick} = this.props;
        console.log('CellAction : ', this.props);
        return <td>
            <Button title="Edit" onClick={() => {
                console.log(' oncl: ',);
            }}/>
        </td>
    }
}

export default withTranslation('app')(GridUi);