import React from "react";

class GridCommands extends React.Component {
    render() {
        return <td>
            {this.props.children}
        </td>
    }
}

export default GridCommands;