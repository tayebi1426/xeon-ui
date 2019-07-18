import axios from 'axios'

const DEFAULT_REQUEST_TIMEOUT = process.env['REACT_APP_DEFAULT_REQUEST_TIMEOUT'];

const JSON_HEADER_CONTENT_TYPE = 'application/json; charset=utf-8';
const DEFAULT_HEADER = {'Content-Type': JSON_HEADER_CONTENT_TYPE};

axios.defaults.headers.post = DEFAULT_HEADER;
axios.defaults.timeout = DEFAULT_REQUEST_TIMEOUT || 10000;

class AjaxRequest {

    static async getSyncRequest(url, params) {
       return await axios.get(url, {params: params}).data;
    }
    static getRequest(url, params) {
        let promise =axios.get(url, {params: params});
       promise.catch(AjaxRequest.handleErrors);
        return promise.then(response => response.data);
    }

    static postRequest(url, data) {
        let promise = axios.post(url, JSON.stringify(data));
        promise.catch(AjaxRequest.handleErrors);
        return promise.then(response => response.data);
    }

    static handleErrors(ex) {
        console.error(ex);
    }
}

export default AjaxRequest;