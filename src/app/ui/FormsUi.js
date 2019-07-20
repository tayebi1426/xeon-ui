import React from "react";

import {Button,  Checkbox, Form, Input, Select, Switch} from "../../core/index";

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
            suggestions: [],
            gridData:
                [
                    {id: 1, name: 'A-15'},
                    {id: 2, name: 'B-6'}
                ]
        };
    }

    render() {

        return (
            <React.Fragment>
                {this.renderSampleForm()}
            </React.Fragment>
        );
    }

    renderSampleForm() {
        return <Form title="sampleForm">
            <Input
                type="email"
                name="email"
                id="exampleEmail"
                label="email"
                placeholder={"email"}
            />

            <Input
                type="password"
                name="password"
                id="password"
                label="password"
                placeholder="password"
            />

            <Select
                name="form-field-name"
                label="product.name"
                value={this.state.selectedOption}
                onChange={this.selectHandleChange}
                options={SELECT_DATA}
            />
            <Switch label="col"
                    className="custom-switch custom-switch-primary"
                    checked={this.state.switchCheckedPrimary}
                    onChange={switchCheckedPrimary => {
                        this.setState({switchCheckedPrimary});
                    }}
            />
            <Checkbox name="testCheckbox" id="exampleCustomCheckbox" label="Check this custom checkbox"/>
            <Button title="save" color="primary"/>
        </Form>
    }

}

export default FormsUi;