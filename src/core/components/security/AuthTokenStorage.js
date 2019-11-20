const AUTH_TOKEN_NAME = process.env.REACT_APP_AUTH_TOKEN_NAME || 'AUTH_TOKEN';
const TOKEN_STORAGE_SCOPE = 'SESSION_STORAGE';

class AuthTokenStorage {

    static persistToken(token) {
        AuthTokenStorage.getStorage().setItem(AUTH_TOKEN_NAME, JSON.stringify(token));
    }

    static removeToken() {
        AuthTokenStorage.getStorage().removeItem(AUTH_TOKEN_NAME);
    }

    static getToken() {
        return JSON.parse(AuthTokenStorage.getStorage().getItem(AUTH_TOKEN_NAME))
    }

    static getStorage() {
        let tokenStorage;
        switch (TOKEN_STORAGE_SCOPE) {
            case 'SESSION_STORAGE':
                tokenStorage = sessionStorage;
                break;
            case 'LOCAL_STORAGE':
                tokenStorage = localStorage;
                break;
        }

        return tokenStorage;
    }
}

export default AuthTokenStorage;