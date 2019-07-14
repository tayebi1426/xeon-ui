import React from "react";
import {Route, Switch} from 'react-router-dom';

class MainRouter extends React.Component {

    render() {
        const {mainRoutes} = this.props;
        return <Switch>
            {
                mainRoutes && mainRoutes.map(r => {
                    return <Route key={r.path} {...r}/>
                })
            }
        </Switch>
    }

}

export default MainRouter;