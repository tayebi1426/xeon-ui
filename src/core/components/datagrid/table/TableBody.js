import React from "react";
import TableRow from "./TableRow";

function TableBody(props) {
    return (
        <tbody>
         <TableRows {...props}/>
        </tbody>
    )
}

function TableRows({schema, data}) {
    return data.map(dataItem => <TableRow key={Math.random()} schema={schema} dataItem={dataItem}/>)
}

export default TableBody