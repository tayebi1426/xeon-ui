import React from "react";
import {Route, Switch} from 'react-router-dom';
import PropTypes from "prop-types";

function SwitchRouter({routes, children}) {
    return <Switch>
        {
            (routes && routes.length > 0) ? routes.map(r => <Route key={r.path} {...r}/>) : children
        }
    </Switch>
}
/*function SecureRout(){
    if(sec){
        return <Redirect
    }elseif
}*/
SwitchRouter.propTypes = {
    routes: PropTypes.array
};

export default SwitchRouter;
