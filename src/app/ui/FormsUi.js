import React from "react";

import {Button, Checkbox, Field, Form, Input, Row, Select, Switch} from "../../core/index";
import LabelAndValue from "../../core/components/common/LabelAndValue";

const SELECT_DATA = [
    {label: "Chocolate", value: "chocolate", key: 0},
    {label: "Vanilla", value: "vanilla", key: 1},
    {label: "Strawberry", value: "strawberry", key: 2},
    {label: "Caramel", value: "caramel", key: 3},
    {label: "Cookies and Cream", value: "cookieScream", key: 4},
    {label: "Peppermint", value: "peppermint", key: 5}
];

class FormsUi extends React.Component {

    selectHandleChange = selectedOption => {
        this.setState({selectedOption});
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: [],
            selectedOption: "",
            startDate: null,
            startDateTime: null,
            startDateRange: null,
            endDateRange: null,
            embeddedDate: null,
            tags: [],
            switchCheckedPrimary: false,
            switchCheckedPrimaryInverse: true,
            switchCheckedSecondary: true,
            switchCheckedSecondaryInverse: false,
            suggestionValue: "",
            suggestions: []
        };
    }

    render() {
        return<div>
            <LabelAndValue label="email" value="R@T.com"/>
        <Form title="sampleForm">
            <Row>
                <Field id="exampleEmail" name="email" label="email">
                    <Input type="email" placeholder="email"/>
                </Field>
                <Field id="password" name="password" label="password">
                    <Input type="password" placeholder="password"/>
                </Field>
                <Field id="form-field-name" name="form-field-name" label="product.name">
                    <Select value={this.state.selectedOption} onChange={this.selectHandleChange} options={SELECT_DATA}/>
                </Field>
            </Row>
            <Row>
                <Field id="Switch" name="Switch" label="Switch">
                    <Switch checked={this.state.switchCheckedPrimary} onChange={switchCheckedPrimary => {
                        this.setState({switchCheckedPrimary});
                    }}/>
                </Field>
                <Field id="testCheckbox" name="testCheckbox" label="Check this custom checkbox">
                    <Checkbox/>
                </Field>
            </Row>
            <Button title="save" color="primary"/>
        </Form>
        </div>
    }

}

export default FormsUi;