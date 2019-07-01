import {Grid as KGrid} from '@progress/kendo-react-grid'
import React from "react";

class Grid extends React.Component {

    render() {
        return <KGrid>
            {this.props.children}
        </KGrid>
    }

}

