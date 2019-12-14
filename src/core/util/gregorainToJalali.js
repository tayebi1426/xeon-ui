const gregorianToJalali = dt => {
    if (!dt) {
        return;
    }
    let date = new Date(dt);
    if (date !== 'Invalid Date') {
        return date.toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    }
    return dt
};

const gregorianToJalaliWithEnNumbering = dt => {
    if (!dt) {
        return;
    }
    let date = new Date(dt);
    if (date !== 'Invalid Date') {
        return date.toLocaleDateString("fa-IR-u-nu-latn", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    }
    return dt
};

const gregorianToJalaliWithTime = dt => {
    if (!dt) {
        return;
    }
    let date = new Date(dt);
    if (date !== 'Invalid Date') {
        const formattedDate = date.toLocaleDateString("fa-IR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",

        });
        return formattedDate.replace(/،/g, ' - ');
    }
    return dt
};

export {gregorianToJalali, gregorianToJalaliWithTime, gregorianToJalaliWithEnNumbering};