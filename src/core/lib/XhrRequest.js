import axios from 'axios'

const DEFAULT_REQUEST_TIMEOUT = process.env['REACT_APP_DEFAULT_REQUEST_TIMEOUT'];

const JSON_HEADER_CONTENT_TYPE = 'application/json; charset=utf-8';
const DEFAULT_HEADER = {'Content-Type': JSON_HEADER_CONTENT_TYPE};

axios.defaults.headers.post = DEFAULT_HEADER;
axios.defaults.timeout = DEFAULT_REQUEST_TIMEOUT || 10000;

class XhrRequest {

    static updateDefaultHeader(header) {
        axios.defaults.headers = Object.assign({}, axios.defaults.headers, header)
    }

    static getRequest(url, params, headers) {
        let promise = axios.get(url, {params, headers});
        return this.callRequest(promise)
    }

    static postRequest(url, data, headers) {
        let promise = axios.post(url, JSON.stringify(data), {headers});
        return this.callRequest(promise)
    }

    static  callRequest(promise) {
        promise.catch(XhrRequest.handleErrors);
        return promise.then(response => response.data);
    }

    static handleErrors(ex) {
        console.error(ex);
    }
}

export default XhrRequest;