import React from 'react'

import {Button, Card, Row} from "../../index";

import {GridSearchContext} from './GridSearchContext';
import * as PropTypes from "prop-types";
import Form from "../form/Form";
import {createGridSearchObject} from "./createGridSearchObject";

class GridSearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    render() {
        let {children, title} = this.props;

        let initialValues = {};
        let namesAndOperators = React.Children.toArray(children).map((child) => {
            let {name, operator, type} = child.props;
            if (name) {
                let inputType = type ? type : 'text';
                initialValues[name] = '';
                return {name: name, operator: operator, type: inputType}
            }
        });
        return (
            <GridSearchContext.Consumer>
                {({onSearchClicked}) => (
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    <Card title={title}>
                        <Form initialValues={initialValues}
                              innerRef={(el) => this.formRef = el}
                              onSubmit={(values, actions) => this.onSearchClicked(values, actions, onSearchClicked, namesAndOperators)}>
                            <Row>
                                {children}
                            </Row>
                            <Row>
                                <Button isPrimary={true} title={'search'}/>
                                <Button type={'button'} onClick={(e) => this.onSearchClear(e, onSearchClicked)}
                                        title={'clear'}/>
                            </Row>
                        </Form>
                    </Card>

                )}
            </GridSearchContext.Consumer>

        );
    }

    onSearchClicked = (values, actions, onSearchClicked, namesAndOperators) => {
        actions.setSubmitting(false);
        const searchObject = createGridSearchObject(values, namesAndOperators);
        onSearchClicked(searchObject);
    };

    onSearchClear = (e, onSearchClicked) => {
        // Object.values(this.formRef.elements).forEach(element => {
        //     element.value = '';
        // })
        this.formRef.reset();
        onSearchClicked(null);
    }

}

GridSearchForm.propTypes = {
    title: PropTypes.string.isRequired,
};

export default GridSearchForm;