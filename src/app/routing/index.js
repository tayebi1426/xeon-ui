import FormsUi from "../ui/FormsUi";
import GridUi from "../ui/GridUi";
import TabComponent from "../ui/TabComponent";
import SearchGithub from "../ui/SearchGithub";

const MAIN_ROUTES = [
    {path: '/form', component: FormsUi},
    {path: '/grid', component: GridUi},
    {path: '/tab', component: TabComponent},
    {path: '/searchGithub', component: SearchGithub}
];

export default MAIN_ROUTES;