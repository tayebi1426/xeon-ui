import axios from 'axios'

const POST_METHOD = 'POST';
const PUT_METHOD = 'PUT';
const METHOD_CONFIG_NAME = 'method';
const DEFAULT_POST_HEADER = {'Content-Type': 'application/json; charset=utf-8'};

const DEFAULT_REQUEST_TIMEOUT = process.env['REACT_APP_DEFAULT_REQUEST_TIMEOUT'];

axios.defaults.headers.post = DEFAULT_POST_HEADER;
axios.defaults.timeout = DEFAULT_REQUEST_TIMEOUT || 10000;

class XhrRequest {

    static getRequest(url, params, headers) {
        return XhrRequest.callRequest(XhrRequest.createRequest({url, params, headers}))
    }

    static postRequest(url, data, headers) {
        data = JSON.stringify(data);
        let req = XhrRequest.createRequest({url, [METHOD_CONFIG_NAME]: POST_METHOD, data, headers});
        return XhrRequest.callRequest(req);
    }

    static putRequest(url, data, headers) {
        data = JSON.stringify(data);
        let req = XhrRequest.createRequest({url, [METHOD_CONFIG_NAME]: PUT_METHOD, data, headers});
        return XhrRequest.callRequest(req);
    }

    static createRequest(config) {
        return axios.request(config);
    }

    static callRequest(promise) {
        promise.catch(XhrRequest.handleErrors);
        return promise.then(response => response.data);
    }

    static handleErrors(ex) {
        console.error(ex);
    }

    static setBaseURL(baseURL) {
        axios.defaults.baseURL = baseURL;
    }

    static updateDefaultHeader(header) {
        axios.defaults.headers = Object.assign({}, axios.defaults.headers, header)
    }
}

axios.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
}, (error) => {
    // Do something with request error
    console.error('request error : ', error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
}, (error) => {
    console.error('response error : ', error);
    return Promise.reject(error);
});

export default XhrRequest;