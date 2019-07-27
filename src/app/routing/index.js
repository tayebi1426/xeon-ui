import React from 'react'

let FormsUi=React.lazy(()=>import("../ui/FormsUi")) ;
let GridUi=React.lazy(()=>import("../ui/GridUi")) ;
let TabComponent=React.lazy(()=>import("../ui/TabComponent")) ;
let SearchGithub=React.lazy(()=>import("../ui/SearchGithub")) ;

const MAIN_ROUTES = [
    {path: '/form', component: FormsUi},
    {path: '/grid', component: GridUi},
    {path: '/tab', component: TabComponent},
    {path: '/searchGithub', component: SearchGithub}
];

export default MAIN_ROUTES;