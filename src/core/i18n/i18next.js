import i18next from "i18next"
import fa from './fa'
i18next.init({
    lng: 'fa',
    debug: false,
    resources: {
        fa: {
            translation:fa
        }
    }
});

export default i18next.getFixedT('fa');