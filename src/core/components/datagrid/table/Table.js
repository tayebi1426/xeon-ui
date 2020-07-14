import React from "react";
import THeader from "./TableHeader";
import TableBody from "./TableBody";
import DataGridContext from '../DataGridContext';

class Table extends React.Component {

    render() {
        let {schema, data} = this.context;
        let {className} = this.props;
        return <div className='table-responsive-md'>
            <table className={className}>
                <THeader schema={schema}/>
                <TableBody schema={schema} data={data}/>
            </table>
        </div>
    }
}

Table.contextType = DataGridContext;
Table.defaultProps = {
    className: "table table-hover table-bordered"
};

export default Table;