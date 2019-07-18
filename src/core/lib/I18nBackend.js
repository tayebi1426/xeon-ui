//import AjaxRequest from './AjaxRequest'
import axios from 'axios'

const DEFAULT_OPTIONS = {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    allowMultiLoading: false,
    parse: JSON.parse,
    crossDomain: false
};

class I18nBackend {
    static type = 'backend';

    init(services, options = {}) {
        this.services = services;
        this.options = Object.assign(options, DEFAULT_OPTIONS);
    }

   async read(language, namespace, callback) {
        let loadPath = this.options.loadPath;
        if (typeof loadPath === 'function') {
            loadPath = loadPath.call([language], [namespace]);
        }

        let url = this.services.interpolator.interpolate(loadPath, {lng: language, ns: namespace}, language, {});

        let resource=await loadResource(url);
        callback(null, resource);
    }

}
async function  loadResource(url) {
    console.debug('bef I18nBackend.loadResource : ',new Date());
    let response =await axios.get(url); //{"data":{"firstName":"Ali"}};
    console.debug('after I18nBackend.loadResource : ',{response});
    return response.data;
}
export default I18nBackend;