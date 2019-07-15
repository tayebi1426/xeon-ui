import AjaxRequest from '../lib/AjaxRequest'

const DEFAULT_OPTIONS = () => {
    return {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        addPath: '/locales/add/{{lng}}/{{ns}}',
        allowMultiLoading: false,
        parse: JSON.parse,
        crossDomain: false,
        //ajax: ajax
    };
};

class Backend {
  static type = 'backend';


    init(services, options = {}) {
        this.services = services;
        this.options = Object.assign(options, this.options || {}, DEFAULT_OPTIONS);
    }

    read(language, namespace, callback) {
        if (language === 'dev') {
            callback(null, null);
            return;
        }
        let loadPath = this.options.loadPath;
        if (typeof loadPath === 'function') {
            loadPath = loadPath.call([language], [namespace]);
        }

        let url = this.services.interpolator.interpolate(loadPath, {lng: language, ns: namespace});

        this.loadUrl(url, callback);
    }

    async loadUrl(url, callback) {
        let resource = await AjaxRequest.getRequest(url);
        callback(null, resource);
    }
}

export default Backend;