import React from 'react'
import {Button,Select, Card, Row,Dialog,DialogBody} from '../../core'

const SELECT_DATA = [
    {id: "Chocolate", name: "chocolate", key: 0},
    {id: "Vanilla", name: "vanilla", key: 1},
    {id: "Strawberry", name: "strawberry", key: 2},
    {id: "Caramel", name: "caramel", key: 3},
    {id: "Cookies and Cream", name: "cookieScream", key: 4},
    {id: "Peppermint", name: "peppermint", key: 5}
];
class DialogUi extends React.Component {
    state = {
        showDialog: false
    };
    toggleShowDialog = () => {
        this.setState({showDialog: !this.state.showDialog});
    };

    render() {
        return <React.Fragment>
            <Card title="Dialog Box">
                <Row>
                    <Button isPrimary={true} title="show dialog" onClick={this.toggleShowDialog}/>
                </Row>
            </Card>
            {this.renderDialog()}
        </React.Fragment>
    }

    renderDialog(){
        return <Dialog isOpen={this.state.showDialog}>
            <DialogBody >
                <Select data={SELECT_DATA}/>
            </DialogBody>
        </Dialog>
    }
}

export default DialogUi