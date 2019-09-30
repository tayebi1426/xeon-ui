const sessionName = 'user_account';

class Security {
    static getUserAccount() {
        return JSON.parse(sessionStorage.getItem(sessionName));
    }

    static getUserRoles() {
        return Security.getUserAccount().roles;
    }

    static getUserAccess() {
        return Security.getUserAccount().access;
    }

    static loginUser(userAccount) {
        sessionStorage.setItem(sessionName, JSON.stringify(userAccount))
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
