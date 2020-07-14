const FA_IR_LOCALE = 'fa-IR';
const FA_IR_LATIN_NUMBER_LOCALE = 'fa-IR-u-nu-latn';
const DATE_FORMAT = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
};
const DATE_TIME_FORMAT = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};
const gregorianToJalali = (dt, locale = FA_IR_LOCALE, options = DATE_FORMAT) => {
    if (!dt) {
        return;
    }
    const formattedDate = new Date(dt).toLocaleDateString(locale, options);

    return locale === FA_IR_LOCALE ? formattedDate : formattedDate.replace(/،/g, ' - ');
};

export default gregorianToJalali;
export {DATE_FORMAT, DATE_TIME_FORMAT, FA_IR_LOCALE, FA_IR_LATIN_NUMBER_LOCALE}