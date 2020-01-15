import React from "react";
import TableRow from "./TableRow";

function TableBody({schema,data}) {
    return (
        <tbody>
        {
            data.map(dataItem=><TableRow key={Math.random()} schema={schema} dataItem={dataItem}/>)
        }
        </tbody>
    )
}

export default TableBody