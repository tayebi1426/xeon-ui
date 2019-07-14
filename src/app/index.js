import configStore from './redux'
import XeonApp from '../core/base/XeonApp'
import mainRoutes from './routing'
const appStore = configStore();

class TestApp extends XeonApp {

    getAppStore() {
        return appStore;
    }

    getMainRoutes() {
        return mainRoutes;
    }

}

export default TestApp;
