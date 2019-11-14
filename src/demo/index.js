import React from 'react'
//import * as serviceWorker from './serviceWorker';
import configStore from './redux'
import {XeonApp} from '../core/index'
import appRoutes from './routing'

const appStore = configStore();
const DemoApp=()=><XeonApp store={appStore} appRoutes={appRoutes}/>;

export default DemoApp;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

