import React from "react";
import {
    Button,
    Card,
    Checkbox,
    DatePicker,
    Field,
    Form,
    Input,
    LabelAndValue,
    Notification,
    Row,
    Select,
    Switch,
    TextArea
} from "../../core/index";


const SELECT_DATA = [
    {label: "Chocolate", value: "chocolate", key: 0},
    {label: "Vanilla", value: "vanilla", key: 1},
    {label: "Strawberry", value: "strawberry", key: 2},
    {label: "Caramel", value: "caramel", key: 3},
    {label: "Cookies and Cream", value: "cookieScream", key: 4},
    {label: "Peppermint", value: "peppermint", key: 5}
];

class FormUi extends React.Component {

    selectHandleChange = selectedOption => {
        this.setState({selectedOption});
    };
    handleOnClick = () => {
        Notification.success('Info message', 'Title');
    };
    handleBirthDateChange = (val) => {
        console.debug('birthDate : ', val);
        this.state({birthDate: val})
    };

    state = {
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
        birthDate:''
    };


    render() {
        return <Card title="sampleForm">

            <LabelAndValue label="email" value="R@T.com"/>
            <Form title="sampleForm">
                <Row>
                    <Field id="exampleEmail" name="email" label="email">
                        <Input type="email" placeholder="email"/>
                    </Field>
                    <Field id="password" name="password" label="password">
                        <Input type="password" placeholder="password"/>
                    </Field>
                </Row>
                <Row>
                    <Field name="birthDate" label="birthDate" onChange={this.handleBirthDateChange} value={this.state.birthDate}>
                        <DatePicker/>
                    </Field>
                </Row>

                <Row>
                    <Field id="form-field-name" name="form-field-name" label="product.name">
                        <Select value={this.state.selectedOption} onChange={this.selectHandleChange}
                                options={SELECT_DATA}/>
                    </Field>
                </Row>
                <Row>
                    <Field id="Switch" name="Switch" label="state">
                        <Switch checked={this.state.switchCheckedPrimary} onChange={switchCheckedPrimary => {
                            this.setState({switchCheckedPrimary});
                        }}/>
                    </Field>
                    <Field id="testCheckbox" name="testCheckbox" label="Check this custom checkbox">
                        <Checkbox/>
                    </Field>
                </Row>
                <Row>
                    <Field name="description" label="description">
                        <TextArea name="description"/>
                    </Field>
                </Row>
                <Row>
                    <Button title="save" isPrimary={true} onClick={this.handleOnClick}/>
                    <Button title="rest" isPrimary={false} onClick={this.handleOnClick}/>
                    <Button title="link" link={true} onClick={this.handleOnClick}/>
                </Row>
            </Form>


        </Card>
    }

}

export default FormUi;
