const sessionName = 'user_account';

class Security {
    constructor() {
    }

    static GetUserAccount() {
        return this.userAccount = JSON.parse(sessionStorage.getItem(sessionName));
    };

    static LoginUser(userAccount) {
        sessionStorage.setItem(sessionName, JSON.stringify(userAccount))
    };

    static RemoveUser() {
        sessionStorage.removeItem(sessionName);
    };

    static HasRole(accessList) {
        this.GetUserAccount();
        if (this.userAccount.access && accessList) {
            for (let access of accessList) {
                if (this.userAccount.access.includes(access)) return true;
            }
        } else {
            return false;
        }
    };
}

export default Security;
