import React from "react";
import {GridSearchContext} from './GridSearchContext';

function GridToolbar(props) {
    console.log(React.Children.toArray(props.children)[0])
    let child = React.Children.toArray(props.children)[0];

    return (
        <GridSearchContext.Consumer>
            {({selectedItems}) => (
                React.Children.toArray(props.children).map(child => {
                    return React.cloneElement(child, {
                        onClick: (e) => child.props.onClick(e, selectedItems)
                    });
                })
            )}
        </GridSearchContext.Consumer>
    );

}

export default GridToolbar;