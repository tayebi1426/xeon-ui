import React from "react";
import TableCol from "./TableCol";

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

export default TableRow;