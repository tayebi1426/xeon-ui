import React from 'react'
import * as serviceWorker from './serviceWorker';

import configStore from './redux'
import {XeonApp} from '../core/index'
import appRoutes from './routing'

const appStore = configStore();

function App() {
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");

    return <XeonApp store={appStore} appRoutes={appRoutes}/>
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

