import React from "react";
import {Card, CardBody, CardTitle, Row} from "reactstrap";

import {Button, Checkbox, Form, Input,Select,Switch,I18Massage,Colxx,Separator,i18n} from "../core";

const SELECT_DATA = [
    {label: "Chocolate", value: "chocolate", key: 0},
    {label: "Vanilla", value: "vanilla", key: 1},
    {label: "Strawberry", value: "strawberry", key: 2},
    {label: "Caramel", value: "caramel", key: 3},
    {label: "Cookies and Cream", value: "cookiescream", key: 4},
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
        return (
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            <CardTitle>
                               <I18Massage  code="Basic Form" />
                            </CardTitle>
                            <Form>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    label="Email"
                                    placeholder={"Email"}
                                />

                                    <Input
                                        type="password"
                                        name="passwordBasic"
                                        id="passwordBasic"
                                        label="password"
                                        placeholder="password"
                                    />

                                <Select
                                    name="form-field-name"
                                    label="select element"
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
                                <Checkbox id="exampleCustomCheckbox" label="Check this custom checkbox"/>

                                <Button title="submit" color="primary" className="mt-4"/>
                            </Form>
                        </CardBody>
                    </Card>
                </Colxx>
            </Row>
        );
    }

}

export default FormsUi;