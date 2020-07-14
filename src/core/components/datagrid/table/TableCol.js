import React from "react";
import {gregorianToJalali,digitGrouping,ObjectUtils} from "../../../util";



function TableCol({dataItem, col, schema}) {
    let val;
    try {
        val = ObjectUtils.getValue(dataItem, col.field);
        let format = schema['format'];
        if (format) {
            val = formatVal(val, format);
        }
    } catch (e) {
        console.error(e);
    }
    return <td>{val}</td>;
}

function formatVal(val, format) {
    if (typeof format === 'function') {
        return format.call(val);
    }

    if (format === 'currency') {
        return digitGrouping(val);
    } else if (typeof val === "number" && format === 'dateTime') {
        return gregorianToJalali(val);
    }
    return val;
}


export default TableCol;