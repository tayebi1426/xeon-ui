import React,{Suspense} from 'react';
import DefaultLayout from "../layouts/DefaultLayout";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import PropTypes from "prop-types";

const Loader = () => <div>loading...</div>;

class XeonApp extends React.Component {

    constructor(props) {
        super(props);
        this.init();
    }

    render() {
        let {store,mainRoutes} = this.props;

        return (
            <Provider store={store}>
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

}
XeonApp.propTypes={
    store:PropTypes.object.isRequired,
    mainRoutes:PropTypes.array.isRequired
};
export default XeonApp;