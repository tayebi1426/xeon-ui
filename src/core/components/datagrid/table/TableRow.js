import React from "react";
import TableCol from "./TableCol";

function TableRow({schema, dataItem}) {
    return <tr>
        {
            schema.map((col, index) => {
                    return <TableCol key={Math.random()} dataItem={dataItem} col={col} schema={schema[index]}/>
                }
            )
        }
    </tr>
}

export default TableRow;