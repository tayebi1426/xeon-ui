import React from 'react';
import DefaultLayout from "../layouts/DefaultLayout";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";


class XeonApp extends React.Component {
    render() {
        let store = this.getAppStore();
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={DefaultLayout}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }

    getAppStore() {
        throw new TypeError("Must override method");
    }
}

export default XeonApp;