import AuthTokenStorage from "./AuthTokenStorage";
import OAuth2Client from "./OAuth2Client";

class Security {

    static isAuthenticated() {
        return Security.getUserAccount() !== null;
    }

    static getUserAccount() {
        const userAccount = AuthTokenStorage.getToken();
        if (userAccount && userAccount['access_token']) {
            const base64Url = userAccount['access_token'].split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            let jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
            jsonPayload = JSON.parse(jsonPayload);
            jsonPayload['access_token'] = userAccount['access_token'];
            return jsonPayload;
        } else {
            return null;
        }
    }

    static getUserAuthorities() {
        return Security.getUserAccount()['authorities'];
    }

    static loginUser(username, password) {
        AuthTokenStorage.removeToken();
        return OAuth2Client.takeToken(username, password).then((token) => {
            AuthTokenStorage.persistToken(token)
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    static logoutUser() {
        AuthTokenStorage.removeToken();
    }

    static hasAuthority(authorities) {
        let userAuthorities = Security.getUserAuthorities();
        if (!userAuthorities || !authorities) {
            return false;
        }
        for (let authority of authorities) {
            if (userAuthorities.includes(authority)) {
                return true;
            }
        }
    }
}

export default Security;
