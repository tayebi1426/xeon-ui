import React from "react";
import ObjectUtils from "../../../util/ObjectUtils";

function TableCol({dataItem,col}){
    return <td>{ObjectUtils.getValue(dataItem,col.field)}</td>;
}

export default TableCol;