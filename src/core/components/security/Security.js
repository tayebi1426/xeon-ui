import {XhrRequest} from "../../util";
import querystring from "querystring";

const AUTHENTICATION_SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL;
const sessionName = 'user_account';

class Security {
    static getUserAccount() {
        const userAccount= JSON.parse(sessionStorage.getItem(sessionName));
        if(userAccount && userAccount['access_token']) {
            const base64Url = userAccount['access_token'].split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            jsonPayload['access_token'] = userAccount['access_token'];
            return JSON.parse(jsonPayload);
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

    static loginUser(user_userName, user_password) {
        let params = {
            grant_type: 'password',
            username: user_userName,
            password: user_password
        };
        let username = 'clientAppId';
        let password = 'test';
        let basicAuth = 'Basic ' + btoa(username + ':' + password);
        let headers = {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': basicAuth};
        return XhrRequest.postRequest(`${AUTHENTICATION_SERVER_URL}/oauth/token`, querystring.encode(params), headers).then(function(response) {
            sessionStorage.setItem(sessionName, JSON.stringify(response));
            this.props.history.push('/home');
        }).catch(function(edrror) {
            console.log('Error on Authentication', edrror);
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
