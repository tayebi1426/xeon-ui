import store from './redux/store'
import XeonApp from '../core/base/XeonApp'

class TestApp extends XeonApp {

    getAppStore() {
        return store;
    }
}

export default TestApp;
