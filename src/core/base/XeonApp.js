import React from 'react';
import DefaultLayout from "../layouts/DefaultLayout";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";

class XeonApp extends React.Component {
    constructor(props) {
        super(props);
        this.init();
    }

    render() {
        let store = this.getAppStore();
        let appLayout = this.getAppLayout();
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={appLayout}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }

    init() {

    }

    i18nConfig() {

    }

    getAppStore() {
        throw new TypeError("Must override method");
    }

    getAppLayout() {
        return DefaultLayout;
    }


}

export default XeonApp;