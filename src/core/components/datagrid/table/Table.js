import React from "react";
import THeader from "./THeader";
import ObjectUtils from "../../../util/ObjectUtils";

class Table extends React.Component {

    render() {
        let {schema,data,className} = this.props;
        return (
            <table className={className}>
                <THeader schema={schema}/>
                <tbody>
                {
                    data.data.map(dataItem=><TableRow key={Math.random()} schema={schema} dataItem={dataItem}/>)
                }
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        );
    }
}
function TableRow({schema,dataItem}) {
    return <tr>
        {
            schema.map(col=>
            {
              return <TableCol key={Math.random()} dataItem={dataItem} col={col}/>
            }
            )
        }

    </tr>
}
function TableCol({dataItem,col}){
    return <td>{ObjectUtils.getValue(dataItem,col.field)}</td>;
}

Table.defaultProps = {
    className:"table _table-striped table-hover table-bordered _table-dark"
};
export default Table;