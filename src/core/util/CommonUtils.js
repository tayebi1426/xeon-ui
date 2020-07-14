import React from "react";
import {isFunction} from './index'
function hasReactChildren(children) {
    return children && React.Children.count(children) > 0;
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



export {hasReactChildren,  dispatchAction, createAction}