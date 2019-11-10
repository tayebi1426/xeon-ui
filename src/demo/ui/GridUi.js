import React from "react";

import {DataGrid, EditCommand, GridColumn, GridCommand, GridCommands, GridSearchForm,Label,Input,Col,Row} from "xeon-ui";


const gridData = [
    {id: 1, name: 'A-15'},
    {id: 2, name: 'B-6', inEdit: true},
    {id: 3, name: 'B-7'},
    {id: 4, name: 'B-8'},
    {id: 5, name: 'B-9'},
    {id: 6, name: 'B-10'},
    {id: 7, name: 'B-11'},
    {id: 8, name: 'B-12'},
    {id: 9, name: 'B-13'},
    {id: 10, name: 'B-14'},
    {id: 11, name: 'B-15'},
    {id: 13, name: 'B-16'}
];

function NameCell(props) {
    const value = props.dataItem[props.field];
    let cellValue = value;
    if (value === 'A-15') {
        cellValue = 'Rasool';
        return <td style={{color: 'red'}}> {cellValue}</td>
    }
    return cellValue;
}

class GridUi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {skip: 0, take: 10, searchObject: {}};
        this.bindGridData = this.bindGridData.bind(this);
    }

    handleEditItem = ({dataItem}) => {
        console.debug('handleEditItem : ', dataItem);
    };

    handleDeleteItem = ({dataItem}) => {
        console.debug('handleEditItem : ', dataItem);
    };

    bindGridData() {
        this.setState({fetchData: true, readUrl: 'https://localhost:7002/acc-ws/test/bankList'});
    }

    nameCell = (props) => {
        const value = props.dataItem[props.field];
        let cellValue = value;
        if (value === 'A-15') {
            cellValue = 'Rasool';
            return <td style={{color: 'red'}}> {cellValue}</td>
        }
        return <td>cellValue</td>;
    };

    handleSearchFieldChange = (name, event) => {
        this.setState({searchObject: {[name]: event.target.value}});
    };

    searchForm = () => {
        return (
            <GridSearchForm title={'جستجو'}>
                <Row>
                    <Col lg={{size: 3}}>
                        <Label code={'name'}/>
                        <Input name={'name'}/>
                    </Col>
                    <Col lg={{size: 3}}>
                        <Label code={'code'}/>
                        <Input name={'code'}/>
                    </Col>
                </Row>
            </GridSearchForm>
        );
    };

    render() {

        return (
            <React.Fragment>

                {/*<Button onClick={this.bindGridData}/>*/}

                {/*<Card title="Sample Grid">*/}
                <DataGrid readUrl={'https://localhost:7002/acc-ws/unsecured/gridtest'} editField="inEdit"
                          searchForm={this.searchForm()}>
                    <GridColumn field="id" title="product.id"/>
                    <GridColumn field="name" title="product.name"/>
                    <GridCommands>
                        <EditCommand onClick={this.handleEditItem}/>
                        <GridCommand icon="trash-alt" title="delete" onClick={this.handleDeleteItem}/>
                        {/*<GridCommand icon="tools" title="delete" onClick={this.handleDeleteItem}/>*/}
                    </GridCommands>
                </DataGrid>
                {/*</Card>*/}
            </React.Fragment>
        );
    }

}

export default (GridUi);