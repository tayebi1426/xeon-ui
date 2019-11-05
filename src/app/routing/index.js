import React from 'react'
import DefaultLayout from "../../core/layouts/DefaultLayout";

let FormsUi = React.lazy(() => import("../ui/FormsUi"));
let FormValidation = React.lazy(() => import("../ui/FormValidation"));
let GridUi = React.lazy(() => import("../ui/GridUi"));
let TabComponent = React.lazy(() => import("../ui/TabComponent"));

const MAIN_ROUTES = [
    {path: '/form', component: FormsUi},
    {path: '/formValidation', component: FormValidation},
    {path: '/grid', component: GridUi},
    {path: '/tab', component: TabComponent,access:[]}
];
const APP_ROUTES = [
    {path: '/404', component: TabComponent},
    {
        path: '/', component: (props) => {
            return <DefaultLayout {...props} mainRoutes={MAIN_ROUTES}/>
        }
    }
];

export default APP_ROUTES;
