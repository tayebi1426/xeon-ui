const gregorianToJalali = dt => {
    if (!dt) {
        return
    }
    let date = new Date(dt);
    return date.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
};


export default gregorianToJalali;