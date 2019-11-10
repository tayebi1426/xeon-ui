import React from 'react'
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    import("./demo/index").then(({default: DemoApp}) => {
        ReactDOM.render(<DemoApp/>, document.getElementById('root'));
    });
}