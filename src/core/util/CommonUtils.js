import React from "react";

function hasReactChildren(children) {
    return children && React.Children.count(children) > 0;
}

function isFunction(func) {
    return func && typeof func === 'function';
}

function createAction(type, payload) {
    return {type, payload}
}

function dispatchAction(dispatch, type, payload = {}) {
    if (!isFunction(dispatch)) {
        throw new Error('dispatch should be function.');
    }
    if (typeof type !== 'string') {
        throw new Error('type should be valid string.');
    }
    return dispatch({type, payload})
}

function digitGrouping(value) {
    if (value) {
        if (isNumber(value)) {
            return value.toString().replace(/,/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        } else if (isString(value) && value.length > 3) {
            return value.replace(/,/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    }
    return value;
}

function isNumber(obj) {
    return typeof obj == 'number';
}

function isString(obj) {
    return typeof obj == 'string';
}

export {hasReactChildren, isFunction, dispatchAction, createAction, isNumber, isString, digitGrouping}