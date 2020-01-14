import React from "react";
import THeader from "./THeader";
import ObjectUtils from "../../util/ObjectUtils";

class Table extends React.Component {

    render() {
        let {schema,data} = this.props;
        return (
            <table className="table table-striped _table-dark">
                <THeader schema={schema}/>
                <tbody>
                {
                    data.data.map(d=><Row key={Math.random()} schema={schema} data={d}/>)
                }
                </tbody>
            </table>
        );
    }
}
function Row({schema,data}) {
    return <tr>
        {
            schema.map(col=>
            {

                return <td key={Math.random()}>{ObjectUtils.getValue(data,col.field)}</td>;
            }
            )
        }

    </tr>
}
export default Table;