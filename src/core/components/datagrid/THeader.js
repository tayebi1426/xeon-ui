import React from "react";

class THeader extends React.Component {

    render() {
        let {schema} = this.props;
        return (<thead>
            <tr>
            {
                schema.map(col=><th key={col.field}>{col.field}</th> )
            }
            </tr>
            </thead>
        );
    }
}

export default THeader;