const sessionName = 'user_account';

class Security {

    static getUserAccount() {
        return JSON.parse(sessionStorage.getItem(sessionName));
    }

    static getUserRoles() {
        return Security.getUserAccount().access;
    }

    static loginUser(userAccount) {
        sessionStorage.setItem(sessionName, JSON.stringify(userAccount))
    }

    static logoutUser() {
        sessionStorage.removeItem(sessionName);
    }

    static hasRole(accessList) {
        let userRoles = Security.getUserRoles();
        if (!userRoles || !accessList) {
            return false;
        }

        for (let access of accessList) {
            if (userRoles.includes(access)) {
                return true;
            }
        }
    }
}

export default Security;
