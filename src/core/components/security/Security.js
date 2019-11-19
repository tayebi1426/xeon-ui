import {XhrRequest} from "../../util/index";
import querystring from "querystring";

const OAUTH_SRV_URL = process.env.REACT_APP_AUTH_SERVER_URL;
const OAUTH_SRV_TOKEN_URL = `${OAUTH_SRV_URL}/oauth/token`;
const AUTH_USERNAME = process.env.REACT_APP_AUTH_USERNAME;
const AUTH_PASSWORD = process.env.REACT_APP_AUTH_PASSWORD;
const GRANT_TYPE = process.env.REACT_APP_GRANT_TYPE;
const sessionName = 'user_account';
const FORM_URLENCODED = 'application/x-www-form-urlencoded';

class Security {
    static get basicAuthHeaders() {
        let basicAuth = 'Basic ' + btoa(AUTH_USERNAME + ':' + AUTH_PASSWORD);
        return {'Content-Type': FORM_URLENCODED, 'Authorization': basicAuth};
    }

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

    static loginUser(username, password) {
        Security.logoutUser();

        return XhrRequest.postRequest(OAUTH_SRV_TOKEN_URL,
            querystring.encode({
                GRANT_TYPE,
                username,
                password
            }), Security.basicAuthHeaders)
            .then((response) => {
                sessionStorage.setItem(sessionName, JSON.stringify(response));
            }).catch((error) => {
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
