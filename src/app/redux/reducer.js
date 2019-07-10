import FormUi from '../../app/FormsUi'

const INITIAL_APP_STORE = {
    menus: []
};

const APP_REDUCER = (state = INITIAL_APP_STORE, action) => {

    switch (action.type) {
        case 'LOAD_APP_MENU':
            console.log('loading menu... ');
            state = {
                ...state,
                menus: [{path: "/test", exact: true, title: "test", component: FormUi}]
            };
            break;
        default:

    }
    return state
};
export default APP_REDUCER;