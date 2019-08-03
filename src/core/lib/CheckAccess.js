
function CheckAccess(accessList, accessName) {
    accessList.map(access => {
        if(access === accessName) {
            return true;
        } else {
            return false;
        }
    })
}

export default CheckAccess;