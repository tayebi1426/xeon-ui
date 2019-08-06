import React from "react";
import {Route, Switch} from 'react-router-dom';

function SwitchRouter ({routes}){
        return <Switch>
            {
                routes && routes.map(r => <Route key={r.path} {...r}/>)
            }
        </Switch>
}

export default SwitchRouter;