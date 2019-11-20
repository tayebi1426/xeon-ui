import React from 'react'

import {Button, Row} from "../../index";

import {GridContext} from './GridContext';
import * as PropTypes from "prop-types";
import Form from "../form/Form";
import {createGridSearchObject} from "./createGridSearchObject";

class GridSearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    render() {
        let {children} = this.props;

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
            <GridContext.Consumer>
                {({onSearchClicked}) => (
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                        <Form initialValues={initialValues}
                              className={"gridSearchForm"}
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
                )}
            </GridContext.Consumer>

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

};

export default GridSearchForm;