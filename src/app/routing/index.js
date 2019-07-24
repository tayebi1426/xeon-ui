import FormsUi from "../ui/FormsUi";
import GridUi from "../ui/GridUi";
import SearchGithub from "../ui/SearchGithub";

const MAIN_ROUTES = [
    {path: '/form', component: FormsUi},
    {path: '/grid', component: GridUi},
    {path: '/searchGithub', component: SearchGithub}
];

export default MAIN_ROUTES;