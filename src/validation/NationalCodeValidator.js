const INVALID_NATIONAL_CODE = [
    '1111111111',
    '0000000000',
    '2222222222',
    '3333333333',
    '4444444444',
    '5555555555',
    '6666666666',
    '7777777777',
    '8888888888',
    '9999999999'
];

 function validateNationalCode(nc) {

    if (!nc || nc.length !== 10) {
        return false;
    }
    if (INVALID_NATIONAL_CODE.indexOf(nc) !== -1) {
        return false;
    }
    let c = parseInt(nc.charAt(9));
    let n = parseInt(nc.charAt(0)) * 10 +
        parseInt(nc.charAt(1)) * 9 +
        parseInt(nc.charAt(2)) * 8 +
        parseInt(nc.charAt(3)) * 7 +
        parseInt(nc.charAt(4)) * 6 +
        parseInt(nc.charAt(5)) * 5 +
        parseInt(nc.charAt(6)) * 4 +
        parseInt(nc.charAt(7)) * 3 +
        parseInt(nc.charAt(8)) * 2;
    let r = n - parseInt(n / 11) * 11;
    return ((r === 0 && r === c) || (r === 1 && c === 1) || (r > 1 && c === 11 - r));
}
export default validateNationalCode;