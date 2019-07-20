import {withTranslation} from 'react-i18next';

export default (component, ns) => {
    return withTranslation(ns)(component)
}