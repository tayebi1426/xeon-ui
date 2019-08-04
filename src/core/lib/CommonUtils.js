import React from "react";

function hasReactChildren(children) {
    return children && React.Children.count(children)> 0;
}
function isFunction(func) {
    return func && typeof func === 'function';
}

function createAction(type, payload) {
    return {type, payload}
}

export {hasReactChildren,isFunction,createAction}