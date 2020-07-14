import XhrRequest from "./XhrRequest";

import KeyUpEnter from "./EventHandlers";
import digitGrouping from "./digitGrouping";
import gregorianToJalali from "./gregorianToJalali";
import ObjectUtils from "./ObjectUtils";

const isFunction=(func) =>{
    return func && typeof func === 'function';
};

export {hasReactChildren,  dispatchAction, createAction} from "./CommonUtils";

export {XhrRequest, KeyUpEnter,digitGrouping,gregorianToJalali,isFunction,ObjectUtils};
