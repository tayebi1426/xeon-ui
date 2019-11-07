const KeyUpEnter = (func, e) => {
    if (e.keyCode === 13) {
        return func();
    } else {
        return null
    }
};

export default KeyUpEnter;