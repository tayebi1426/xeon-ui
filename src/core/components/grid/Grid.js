import React from "react";
import {Grid as KGrid, GridColumn} from '@progress/kendo-react-grid'
import {withTranslation} from '../../lib'


class DataGrid extends React.Component {

    render() {
        let {columnSchema, t, ...restProps} = this.props;
        let {fields} = columnSchema;
        let gridColumns = fields.map((schema) => {
            let {title, ...restProps} = schema;
            return React.createElement(GridColumn,
                {
                    title: t(title),
                    ...restProps
                });
        });
        return <KGrid {...restProps}>
            {gridColumns}
        </KGrid>
    }

}

export default withTranslation(DataGrid);

