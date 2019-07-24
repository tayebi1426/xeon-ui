import configStore from './redux'
import XeonApp from '../core/base/XeonApp'
import mainRoutes from './routing'

const appStore = configStore();

class TestApp extends XeonApp {
    componentWillMount() {
        //const direction = getDirection();
        if (true) {
            document.body.classList.add("rtl");
            document.body.classList.remove("ltr");
        } else {
            document.body.classList.add("ltr");
            document.body.classList.remove("rtl");
        }
    }

    getAppStore() {
        return appStore;
    }

    getMainRoutes() {
        return mainRoutes;
    }
}

export default TestApp;
