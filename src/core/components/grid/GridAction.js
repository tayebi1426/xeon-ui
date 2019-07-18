import  React from 'react'
import {GridColumn,GridCell } from '@progress/kendo-react-grid';
import Button from '../form/Button'


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

class GridCommands extends React.Component {

    constructor(props){
        super(props);
        console.log(' : ',props);
        //props.cell=CommandCreator;
    }

    render() {
        return <GridColumn title="dfdffdddddff"/>;
    }

}
//
function CommandCreator(props) {
    console.log('commandCreator : ',props);
    return <CellAction dataItem={props.dataItem} dataIndex={0} style={{}}/>
}

export default GridCommands;