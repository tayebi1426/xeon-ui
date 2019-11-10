import React from 'react'
import ReactDOM from 'react-dom';

import XeonApp from './base/XeonApp'

import ('./assets/fonts/iransans/iranSansWeb/css/fontiran.css');
import ('./assets/css/vendor/bootstrap.min.css');
import ('./assets/css/vendor/bootstrap-rtl.min.css');
import ('./assets/css/vendor/kendo-all.css');
import ('./assets/css/sass/themes/gogo.light.green.scss');
import ('./assets/css/sass/style.scss');
import ('./assets/fonts/awesome/css/fontawesome.min.css');
import ('./assets/css/animate.min.css');
import ('./assets/css/notification/notifications.css');

export * from './components/grid/index';
export * from './components/tab/index';
export {Card, CardBody, CardTitle, Row, Col} from "./components/bootstrap/index";
export * from './components/common/index';
export * from './components/form/index';
export * from './util/index';
export {withTranslation} from './i18n/index';
export * from './components/security/index';
export {XeonApp};

console.debug('process.env.NODE_ENV : ',process.env.NODE_ENV);
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    import("../demo/index").then(({default: DemoApp}) => {
        ReactDOM.render(<DemoApp/>, document.getElementById('root'));
    });
}