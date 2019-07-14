import i18next from "i18next"
import backend from "i18next-xhr-backend";

const LOCAL_STORAGE_EXPIRATION_TIME = 86400000;

let i18nOptions = {
    initImmediate: false,
    cookieName: '_lang',
    useLocalStorage: true,
    localStorageExpirationTime: LOCAL_STORAGE_EXPIRATION_TIME,
    load: ['fa'],
    preload: ['fa'],
    lng: 'fa',
    ns: ['common'],
    debug: true,
    interpolation: {
        escapeValue: false // react already safes from xss
    },
    backend: {
        // for all available options read the backend's repository readme file
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
};

i18next
    .use(backend)
    .init(i18nOptions).then((t) => {
    console.log('sss : ', t('common:firstName'));
});

export {i18next as i18n};