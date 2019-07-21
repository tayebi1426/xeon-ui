import React from "react";
import {Grid as KGrid, GridColumn} from '@progress/kendo-react-grid'
import {withTranslation} from '../../lib'
import GridCommands from './GridAction'


class DataGrid extends React.Component {

    render() {
        let {children,columnSchema, t, ...restProps} = this.props;

        React.Children.toArray(children).map(child=>{
            if(!child) { return null }
            console.debug('ch : ',child.type===GridCommands);
        });
        let {fields} = columnSchema;
        let gridColumns = fields.map((schema,idx) => {
            let {title, ...restProps} = schema;
            return React.createElement(GridColumn,
                {
                    key:idx,
                    title: t(title),
                    ...restProps
                });
        });
        //return <div>rt</div>
        return <KGrid {...restProps}>
            {gridColumns}
        </KGrid>
    }

}

export default withTranslation(DataGrid);

