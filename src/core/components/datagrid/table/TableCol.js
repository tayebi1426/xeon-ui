import React from "react";
import ObjectUtils from "../../../util/ObjectUtils";

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
        return formatNumber(val);
    } else if (typeof val === "number" && format === 'dateTime') {
        return gregorianToJalali(val);
    }
    return val;
}

function gregorianToJalali(val) {

    return new Date(val).toLocaleDateString('fa-IR', {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}

function formatNumber(num) {
    if (!num) {
        return 'N/A'
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export default TableCol;