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
        let {store,appRoutes} = this.props;

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<Loader />}>
                    <Switch>
                        {
                            appRoutes.map(r => {
                                return <Route key={r.path} {...r} />
                            })
                        }
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
    appRoutes:PropTypes.array.isRequired
};
export default XeonApp;