import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SwitchRouter} from '../index'
import {Provider} from "react-redux";
import PropTypes from "prop-types";

const Loader = () => <div>loading...</div>;

class XeonApp extends React.Component {

    constructor(props) {
        super(props);
        this.init();
    }

    render() {
        let {store, appRoutes} = this.props;

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<Loader/>}>
                        <SwitchRouter routes={appRoutes}/>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        );
    }

    init() {

    }
}

XeonApp.propTypes = {
    store: PropTypes.object.isRequired,
    appRoutes: PropTypes.array.isRequired
};
export default XeonApp;