import React from 'react'
import DefaultLayout from "../../core/layouts/DefaultLayout";

let LoginPage = React.lazy(() => import("../pages/Login"));
let AccountList = React.lazy(() => import("../pages/AccountList"));
let TransactionList = React.lazy(() => import("../pages/TransactionList"));


const MAIN_ROUTES = [
    {path: '/account', component: AccountList, authorities: ['USER']},
    {path: '/transaction', component: TransactionList, authorities: ['USER']},
];
const Layout = (props) => <DefaultLayout {...props} mainRoutes={MAIN_ROUTES}/>;

const APP_ROUTES = [
    {path: '/login', component: LoginPage},
    {path: '/404', component: null},
    {path: '/', exact: false, component: Layout}
];

export default APP_ROUTES;
