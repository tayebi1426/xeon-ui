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
import RadioGroup from "../../core/components/form/RadioGroups";
import Radio from "../../core/components/form/Radio";
import Col from "../../core/components/bootstrap/Col";


const SELECT_DATA = [
    {label: "Chocolate", value: "chocolate", key: 0},
    {label: "Vanilla", value: "vanilla", key: 1},
    {label: "Strawberry", value: "strawberry", key: 2},
    {label: "Caramel", value: "caramel", key: 3},
    {label: "Cookies and Cream", value: "cookieScream", key: 4},
    {label: "Peppermint", value: "peppermint", key: 5}
];

class FormUi extends React.Component {

    handleBirthDateChange = (val) => {
        console.debug('birthDate : ', val);
        //this.state({birthDate: val})
    };

    state = {
        email: '',
        password: '',
        birthDate: '',
        favColor: 'green'
    };
    handleSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            Notification.success('Info message', 'Title');
        }, 1000);
    };
    handleChangeColor = (e) => {
        console.debug(' e: ', e);
    };

    render() {
        return <React.Fragment>
            {this.renderPolicyInfo()}
            <Card title="sampleForm">
                <Form
                    initialValues={this.state}
                    onSubmit={this.handleSubmit}
                    rules={{}}>
                    <Row>
                        <Field name="email" label="email">
                            <Input type="email"/>
                        </Field>
                        <Field id="password" name="password" label="password">
                            <Input type="password" placeholder="password"/>
                        </Field>
                    </Row>
                    <Row>
                        <Field name="birthDate" label="birthDate">
                            <DatePicker/>
                        </Field>
                    </Row>
                    <Row>
                        <Field name="form-field-name" label="product.name">
                            <Select value={this.state.selectedOption} onChange={this.selectHandleChange}
                                    options={SELECT_DATA}/>
                        </Field>
                    </Row>
                    <Row>
                        <Field name="Switch" label="state">
                            <Switch checked={this.state.switchCheckedPrimary} onChange={switchCheckedPrimary => {
                                this.setState({switchCheckedPrimary});
                            }}/>
                        </Field>
                    </Row>
                    <Row>
                        <Field name="description" label="description">
                            <TextArea name="description"/>
                        </Field>
                    </Row>
                    <Row>
                        <Field id="__testCheckbox" name="testCheckbox" >
                            <Checkbox label="save"/>
                        </Field>
                    </Row>
                    <Row>
                        <RadioGroup title="favColor" name='favColor' value={this.state.favColor}
                                    onChange={this.handleChangeColor}>
                            <Radio value='red' label='red color'/>
                            <Radio value='blue' label='blue color'/>
                            <Radio value='green' label='green color'/>
                        </RadioGroup>
                    </Row>
                    <Row>
                        <Button title="save" isPrimary={true} type='submit'/>
                        <Button title="cancel" isPrimary={false} onClick={this.handleOnClick}/>
                    </Row>
                </Form>
            </Card>
        </React.Fragment>
    }

    renderPolicyInfo() {
        return (
            <Card title="policyInfo.title" collapse={true}>
                <Row form={false}>
                    <LabelAndValue label="policyInfo.insured.firstName" value='علی'/>
                    <LabelAndValue label="policyInfo.insured.lastName" value='احمدی'/>
                    <LabelAndValue label="policyInfo.insured.nationalCode" value='18612746259'/>
                </Row>

                <Row form={false}>
                    <LabelAndValue label="policyInfo.insured.fatherName" value='محمدی'/>
                    <LabelAndValue label="policyInfo.insured.age" value={32}/>
                    <LabelAndValue label="policyInfo.insured.identityCardNo" value='14454'/>
                </Row>
                <Row form={false}>
                    <LabelAndValue label="policyInfo.contract.contractNumber" value="1397/58/74/55"/>
                    <LabelAndValue label="policyInfo.contract.policyholder" value='demisco'/>
                    <LabelAndValue label="policyInfo.contract.startDate" value='1397/08/01' format="date"/>
                </Row>
                <Row form={false}>

                    <LabelAndValue label="policyInfo.contract.endDate" value="1398/08/30"/>
                </Row>
            </Card>
        );
    }

}

export default FormUi;
