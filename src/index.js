import React from 'react'
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    import("./accounting/index").then(({default: AccountingApp}) => {
        ReactDOM.render(<AccountingApp/>, document.getElementById('root'));
    });
}