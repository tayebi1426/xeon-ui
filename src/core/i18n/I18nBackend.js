import XhrRequest from '../util/XhrRequest'
import {isFunction} from '../util'

const DEFAULT_OPTIONS = {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    allowMultiLoading: true,
    parse: JSON.parse,
    crossDomain: false
};

class I18nBackend {
    static type = 'backend';

    init(services, options = {}) {
        this.services = services;
        this.options = Object.assign(options, DEFAULT_OPTIONS);
    }

    read(language, namespace, callback) {
        let loadPath = this.options.loadPath;
        if (isFunction( loadPath)) {
            loadPath = loadPath.call([language], [namespace]);
        }

        let url = this.services.interpolator.interpolate(loadPath, {lng: language, ns: namespace}, language, {});

        XhrRequest.getRequest(url).then((resource) => callback(null, resource));
    }
}

export default I18nBackend;