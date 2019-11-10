import React from 'react'
import Accordion from "../common/Accordion";
import {Button} from "../form";
import Row from "reactstrap/es/Row";
import {Col} from "reactstrap";
import {GridContext} from './GridContext';
import * as PropTypes from "prop-types";
import Form from "../form/Form";

class GridSearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    render() {
        let {children, title} = this.props;

        let nameAndOperators = React.Children.toArray(children).map((child) => {
            let render = child.props.render;
            if (render && render.props && render.props.name) {
                let type = render.props.type ? render.props.type : 'text';
                return {name: render.props.name, operator: child.props.operator, type: type}
            }
        });

        return (

            <GridContext.Consumer>
                {({searchObject, onSearchClicked, onSearchClear}) => (
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    <Accordion title={title}>
                        <Form
                            onSubmit={(values, actions) => this.onSearchClicked(values, actions, searchObject, onSearchClicked)}>
                            <Row>
                                <Col style={{marginRight: '10px', marginTop: '10px'}} lg={{size: 12}} md={{size: 12}}
                                     sm={12} xs={12}>
                                    <Row>
                                        {children}
                                    </Row>
                                </Col>
                                <Col style={{marginRight: '10px', marginTop: '10px'}} lg={{size: 12}} md={{size: 12}}
                                     sm={12} xs={12}>
                                    <Button title={'جستجو'}/>
                                    <Button onClick={(e) => this.onSearchClear(e, onSearchClear)}
                                            title={'پاک کردن'}/></Col>
                            </Row>
                        </Form>
                    </Accordion>

                )}
            </GridContext.Consumer>

        );
    }

    onSearchClicked = (values, actions, searchObject, onSearchClicked) => {
        actions.setSubmitting(false);
        console.log(values)
        console.log(actions)
        // event.preventDefault();
        // const form = event.currentTarget;
        // const formData = createGridSearchObject(form);
        // onSearchClicked(formData);
    };

    onSearchClear = (e, onSearchClear) => {
        e.preventDefault();
        this.formRef.current.reset();
        onSearchClear();
    }

}

GridSearchForm.propTypes = {
    title: PropTypes.string.isRequired,
};

export default GridSearchForm;