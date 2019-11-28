import React from 'react';
import {withTranslation} from 'react-i18next';

export default (Component, ns) => {
    return withTranslation(ns)(({tReady : ignored,i18n, ...restProps}) => <Component  {...restProps}/>)
}