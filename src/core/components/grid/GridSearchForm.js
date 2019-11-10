import React from 'react'
import Accordion from "../common/Accordion";
import {Button, Form} from "../form/index";
import Row from "reactstrap/es/Row";
import {Col} from "reactstrap";
import {GridContext} from './GridContext'

class GridSearchForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {children, title} = this.props;

        return (

            <GridContext.Consumer>
                {({searchObject, onSearchClicked}) => (
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    <Accordion title={title}>
                        <Form
                            onSubmit={(values, actions) => this.onSearchClicked(values, actions, searchObject, onSearchClicked)}>
                            <Row>
                                <Col style={{marginRight: '10px', marginTop: '10px'}} lg={{size: 12}} md={{size: 12}}
                                     sm={12} xs={12}>
                                    {children}
                                </Col>
                                <Col style={{marginRight: '10px', marginTop: '10px'}} lg={{size: 12}} md={{size: 12}}
                                     sm={12} xs={12}><Button title={'جستجو'}/><Button
                                    title={'پاک کردن'}/></Col>
                            </Row>
                        </Form>
                    </Accordion>

                )}
            </GridContext.Consumer>

        );
    }

    onSearchClicked = (values, actions, searchObject, onSearchClicked) => {
        console.log(values)
        console.log(actions)
        // event.preventDefault();
        // const form = event.currentTarget;
        // const body = createGridSearchObject(form);
        searchObject = Object.assign({}, values);
        onSearchClicked(searchObject);
    }

}

export default GridSearchForm;