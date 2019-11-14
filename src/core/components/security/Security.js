import {XhrRequest} from "../../util/index";
import querystring from "querystring";

const AUTHENTICATION_SERVER_URL = process.env.REACT_APP_AUTH_SERVER_URL;
const AUTH_USERNAME = process.env.REACT_APP_AUTH_USERNAME;
const AUTH_PASSWORD = process.env.REACT_APP_AUTH_PASSWORD;
const GRANT_TYPE = process.env.REACT_APP_GRANT_TYPE;
const sessionName = 'user_account';

class Security {
    static getUserAccount() {
        const userAccount = JSON.parse(sessionStorage.getItem(sessionName));
        if (userAccount && userAccount['access_token']) {
            const base64Url = userAccount['access_token'].split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            jsonPayload = JSON.parse(jsonPayload);
            jsonPayload['access_token'] = userAccount['access_token'];
            return jsonPayload;
        } else {
            return null;
        }
    }

    static getUserRoles() {
        return Security.getUserAccount().roles;
    }

    static getUserAccess() {
        return Security.getUserAccount().authorities;
    }

    static loginUser(userName, password) {
        let params = {
            grant_type: GRANT_TYPE,
            username: userName,
            password: password
        };

        let basicAuth = 'Basic ' + btoa(AUTH_USERNAME + ':' + AUTH_PASSWORD);
        let headers = {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': basicAuth};
        return XhrRequest.postRequest(`${AUTHENTICATION_SERVER_URL}/oauth/token`, querystring.encode(params), headers)
            .then((response)=> {
                sessionStorage.setItem(sessionName, JSON.stringify(response));
            }).catch((error)=> {
                console.error('Error on Authentication', error);
                return Promise.reject(error);
            });
    }

    static logoutUser() {
        sessionStorage.removeItem(sessionName);
    }

    static hasRole(roleList) {
        let userAccess = Security.getUserAccess();
        if (!userAccess || !roleList) {
            return false;
        }

        for (let role of roleList) {
            if (userAccess.includes(role)) {
                return true;
            }
        }
    }
}

export default Security;
