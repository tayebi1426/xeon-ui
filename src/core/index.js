import XeonApp from './base/XeonApp'

// Iran Sans Font
import ('./assets/fonts/iransans/iranSansWeb/css/fontiran.css');
import ('bootstrap/dist/css/bootstrap.min.css');
import ('bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css');
import ('./assets/css/vendor/kendo-all.css');
import ('./assets/css/sass/themes/gogo.light.green.scss');
import ('./assets/fonts/iconsmind-s/css/iconsminds.css');
import ('./assets/fonts/simple-line-icons/css/simple-line-icons.css');
import ('./assets/css/sass/style.scss');
// material Icons local
import ('./assets/fonts/material/material-icons.css');
// awesome Icons local
import ('./assets/fonts/awesome/css/fontawesome.css');
// animate css local
import ('./assets/css/animate.min.css');

import ('react-notifications/lib/notifications.css');


export * from './components/grid';
export * from './components/tab';
export {CardBody, CardTitle, Row} from 'reactstrap'
export {Card, Colxx} from "./components/CustomBootstrap";
export * from './components/common';
export {
    XhrRequest,
    I18n,
    Security,
    withTranslation,
    validateNationalCode,
    CheckAccess,
    KeyUpEnter,
    dispatchAction,
    createAction
} from './util';
export {Form, Field, Select, Input, Label, Switch, Button, Checkbox, DatePicker} from './components/form';
export {Authorization} from './components/security';
export {XeonApp};
