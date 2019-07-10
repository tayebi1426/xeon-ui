import i18next from "i18next"
import fa from './fa'

let i18nOptions={
    cookieName: '_lang',
    resGetPath:'/locales/__lng__/__ns__.json',
    useLocalStorage: true,
    localStorageExpirationTime: 86400000,
    lng: 'fa',
    debug: false,
    customLoad: function(lng, ns, options, loadComplete) {
        // load the file for given language and namespace
        console.log(' : ',lng,options,ns);
        // callback with parsed json data
        //   loadComplete(null, data); // or loadComplete('some error'); if failed
    }
};

i18next.init(i18nOptions);

const i18n = i18next.getFixedT('fa');
export {i18n};