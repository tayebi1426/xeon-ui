
function CheckAccess(accessList, accessName) {
    let hastAccess = false;
    accessList.map(access => {
        if(access === accessName) {
            hastAccess = true;
        } else {
            hastAccess = false;
        }
    });

    return hastAccess;
}

export default CheckAccess;