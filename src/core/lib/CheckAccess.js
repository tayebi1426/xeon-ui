
function CheckAccess(accessList, accessName) {
    return (
        accessList.map(access => {
            return (access === accessName) ? true : false
        })
    )
}

export default CheckAccess;