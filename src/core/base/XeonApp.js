import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import PropTypes from "prop-types";
import {SwitchRouter} from '../index'

const PageLoading = () => <div>Loading...</div>;

const XeonApp = ({store, appRoutes}) => {
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");

    return <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<PageLoading/>}>
                <SwitchRouter routes={appRoutes}/>
            </Suspense>
        </BrowserRouter>
    </Provider>
};

XeonApp.propTypes = {
    store: PropTypes.object.isRequired,
    appRoutes: PropTypes.array.isRequired
};
export default XeonApp;