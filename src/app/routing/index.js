import FormsUi from "../ui/FormsUi";
import GridUi from "../ui/GridUi";
import TabComponent from "../ui/TabComponent";

const MAIN_ROUTES = [
    {path: '/form', component: FormsUi},
    {path: '/grid', component: GridUi},
    {path: '/tab', component: TabComponent}
];

export default MAIN_ROUTES;