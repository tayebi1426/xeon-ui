const gregorianToJalali = dt => {
    if(!dt){
        return;
    }
    let date = new Date(dt);
        if(date != 'Invalid Date') {
            return date.toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        }
        return dt
};

export default gregorianToJalali;