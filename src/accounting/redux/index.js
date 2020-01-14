import {createStore} from 'redux'
import appReducer from './reducer'

const INITIAL_APP_STORE = {
    user:null,
    routes: []
};

function configStore(initState = INITIAL_APP_STORE) {
    return createStore(appReducer, initState);
}

export default configStore;

