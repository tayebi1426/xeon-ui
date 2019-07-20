import  React from 'react'
import {GridColumn,GridCell } from '@progress/kendo-react-grid';
import Button from '../form/Button'


class CellAction extends GridCell {

    render() {
        let {title, onClick} = this.props;

        return <td>
            <Button title="Edit" onClick={() => {

            }}/>
        </td>
    }
}

class GridCommands extends React.Component {


    render() {
        return <GridColumn title="dfdffdddddff"/>;
    }

}
//
function CommandCreator(props) {
    return <CellAction dataItem={props.dataItem} dataIndex={0} style={{}}/>
}

export default GridCommands;