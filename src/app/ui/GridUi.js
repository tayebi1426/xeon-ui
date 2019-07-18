import React from "react";
import {Card, Grid, GridColumn} from "../../core/index";
import {GridCell} from "@progress/kendo-react-grid";
import Button from "../../core/components/form/Button";
import {XGrid, GridAction} from "../../core/components/grid";

const gridData = [
    {id: 1, name: 'A-15'},
    {id: 2, name: 'B-6'}
];

class GridUi extends React.Component {

    handleEditAction = (arg) => {
        console.log(" handleEditAction: ", arg);
    };

    async componentDidMount() {
        console.log("GridUi bef : ", new Date());
        let res = await new Promise(resolve => {
            setTimeout(() => resolve(5454), 5000);
        });
        console.log('GridUi.res : ', res);
    }

    render() {
        return (
            <React.Fragment>
                <Card title="Sample Grid">
                    <XGrid data={gridData}>
                        <GridColumn field="id" title="product.id"/>
                        <GridColumn field="name" title="product.name"/>
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

export default GridUi;