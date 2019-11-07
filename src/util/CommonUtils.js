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

function dispatchAction(dispatch, type, payload={}) {
    if (!isFunction(dispatch)) {
        throw new Error('dispatch should be function.');
    }
    if (typeof type !== 'string') {
        throw new Error('type should be valid string.');
    }
    return dispatch({type, payload})
}
function classNames() {
    let classes = [];
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (!arg) continue;
        if (typeof arg === 'string') {
            classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
            let inner = classNames.apply(null, arg);
            if (inner) {
                classes.push(inner);
            }
        }
    }

    return classes.join(' ');
}
export {hasReactChildren, isFunction, dispatchAction, createAction,classNames}