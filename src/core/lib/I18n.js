import I18n from "i18next"
//import backend from "i18next-xhr-backend";
import I18nBackend from "./I18nBackend";
import {initReactI18next } from 'react-i18next'

let options = {
    initImmediate: false,
    preload: ['fa'],
    lng: 'fa',
    fallbackLng: 'fa',
    ns:['app'],// ['app','common','error'],
    defaultNS: 'app',
    fallbackNS: false,
    debug: false
};

I18n.use(initReactI18next)
    .use(I18nBackend)
    .init(options)
    .then(t=>{
        console.debug('i18n ready.');
});
console.debug('out : ', I18n.t('firstName'));
export default I18n;