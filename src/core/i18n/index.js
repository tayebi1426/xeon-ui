import i18n from "i18next"
//import backend from "i18next-xhr-backend";
import backend from "./I18nBackend";

let i18nOptions = {
    initImmediate: false,
    load: ['fa'],
    preload: ['fa'],
    lng: 'fa',
    fallbackLng: 'fa',
    ns:['app'],// ['app','common','error'],
    defaultNS: 'app',
    fallbackNS: false,
    debug: false,
    interpolation: {
        escapeValue: false // react already safes from xss
    },
    backend: {
        // for all available options read the backend's repository readme file
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
};

i18n.use(backend)
    .init(i18nOptions)
    .then(t=>{
        console.log('i18n ready.');
});


export {i18n};