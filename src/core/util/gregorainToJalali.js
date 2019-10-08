const gregorianToJalali = d => {
    const isDate = isValidDate(d);
    if(isDate) {
        let date = new Date(d);
        return date.toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    }else {
        return d;
    }
};

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

export default gregorianToJalali;