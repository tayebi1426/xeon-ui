import React from "react";

function hasReactChildren(children) {
    return children && React.Children.count(children)> 0;
}
function isFunction(func) {
    return func && typeof func === 'function';
}
export {hasReactChildren,isFunction}