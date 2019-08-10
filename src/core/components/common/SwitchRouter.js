import React from "react";
import PropTypes from "prop-types";
import {Switch} from 'react-router-dom';
import SecureRoute from "../security/SecureRoute";

function SwitchRouter({routes, children}) {
    return <Switch>
        {
            (routes && routes.length > 0) ? routes.map(r => <SecureRoute key={r.path} {...r}/>) : children
        }
    </Switch>
}

SwitchRouter.propTypes = {
    routes: PropTypes.array
};

export default SwitchRouter;
