import querystring from "querystring";
import XhrRequest from "../../util/XhrRequest";

const OAUTH_SRV_TOKEN_URL =  process.env.REACT_APP_AUTH_SERVER_URL;
const AUTH_USERNAME = process.env.REACT_APP_AUTH_USERNAME;
const AUTH_PASSWORD = process.env.REACT_APP_AUTH_PASSWORD;
const GRANT_TYPE = process.env.REACT_APP_GRANT_TYPE;

const FORM_URLENCODED = 'application/x-www-form-urlencoded';

class OAuth2Client {

    static getBasicAuthHeaders() {
        let basicAuth = 'Basic ' + btoa(AUTH_USERNAME + ':' + AUTH_PASSWORD);
        return {'Content-Type': FORM_URLENCODED, 'Authorization': basicAuth};
    }
    static takeToken(username,password){
       return XhrRequest.postRequest(OAUTH_SRV_TOKEN_URL,
            querystring.encode({
                'grant_type': GRANT_TYPE,
                username,
                password
            }), OAuth2Client.getBasicAuthHeaders())
    }
}

export default OAuth2Client;