import {Grid as KGrid} from '@progress/kendo-react-grid'
import React from "react";

class XGrid extends React.Component {

    render() {
        let {children,...restProps}=
            this.props;
        //let columns=children
        React.Children.map(children,(child)=>{
            console.log('child : ','type' in child);
            console.log('child : ',child.type);
        });
        return <KGrid {...restProps}>
            {children}
        </KGrid>
    }

}

export default XGrid;

