

const APP_REDUCER = (state , action) => {

    switch (action.type) {
        case 'LOA_APP_U':
            state = {
                ...state
            };
            break;
        default:

    }
    return state
};
export default APP_REDUCER;