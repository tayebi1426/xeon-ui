import React from "react";
import {I18Massage} from "../../common";

class TableHeader extends React.Component {

    render() {
        let {schema} = this.props;
        return (<thead className={'thead-light'}>
            <tr>
                {
                    schema.map(col => <TableHeaderCol key={col.field} col={col}/>)
                }
            </tr>
            </thead>
        );
    }
}

function TableHeaderCol({col}) {
    return <th>
        <I18Massage code={col.title}/>
    </th>;
}

export default TableHeader;