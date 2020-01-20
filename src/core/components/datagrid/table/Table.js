import React from "react";
import THeader from "./TableHeader";
import TableBody from "./TableBody";
import DataGridContext from '../DataGridContext'

class Table extends React.Component {

    render() {
        let {schema, data} = this.context;
        let {className} = this.props;
        return <React.Fragment>
            <table className={className}>
                <THeader schema={schema}/>
                <TableBody schema={schema} data={data}/>
                <tfoot>
                </tfoot>
            </table>
        </React.Fragment>
    }
}

Table.contextType = DataGridContext;
Table.defaultProps = {
    className: "table _table-striped table-hover _table-bordered _table-dark"
};

export default Table;