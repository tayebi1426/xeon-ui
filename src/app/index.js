import React from 'react'
import configStore from './redux'
import XeonApp from '../core/base/XeonApp'
import appRoutes from './routing'

const appStore = configStore();

function App() {
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");

    return <XeonApp store={appStore} appRoutes={appRoutes}/>
}

export default App;
