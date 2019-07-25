import React,{Suspense} from 'react';
import DefaultLayout from "../layouts/DefaultLayout";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";

const Loader = () => <div>loading...</div>;
class XeonApp extends React.Component {

    constructor(props) {
        super(props);
        this.init();
    }

    render() {
        let {appStore,mainRoutes} = this.props;

        return (
            <Provider store={appStore}>
                <BrowserRouter>
                    <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path="/" component={(props)=>{
                            return <DefaultLayout {...props} mainRoutes={mainRoutes} />}
                        }/>
                    </Switch>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        );
    }

    init() {

    }

    i18nConfig() {

    }
}

export default XeonApp;