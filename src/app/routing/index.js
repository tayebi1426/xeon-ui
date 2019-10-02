import React from 'react'
import DefaultLayout from "../../core/layouts/DefaultLayout";
import Login from "../ui/Login";

let FormsUi = React.lazy(() => import("../ui/FormsUi"));
let GridUi = React.lazy(() => import("../ui/GridUi"));
let FraudGrid = React.lazy(() => import("../ui/FraudGrid"));
let TabComponent = React.lazy(() => import("../ui/TabComponent"));
let SearchGithub = React.lazy(() => import("../ui/SearchGithub"));
let Test = React.lazy(() => import("../ui/Test"));

const MAIN_ROUTES = [
    {path: '/form', component: FormsUi,roles:['ADMIN']},
    {path: '/grid', component: GridUi},
    {path: '/gridTest', component: FraudGrid},
    {path: '/test', component: Test},
    {path: '/tab', component: TabComponent,access:[]},
    {path: '/searchGithub', component: SearchGithub}
];
const APP_ROUTES = [
    {path: '/login', component: Login},
    {path: '/404', component: TabComponent},
    {path: '/503', component: SearchGithub},
    {
        path: '/', component: (props) => {
            return <DefaultLayout {...props} mainRoutes={MAIN_ROUTES}/>
        }
    }
];

export default APP_ROUTES;
