import React from "react";
import i18n from 'i18next'
import {
    Button,
    Card,
    Checkbox,
    DatePicker,
    Field,
    Fieldset,
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


const SELECT_DATA = [
    {id: "Chocolate", name: "chocolate", key: 0},
    {id: "Vanilla", name: "vanilla", key: 1},
    {id: "Strawberry", name: "strawberry", key: 2},
    {id: "Caramel", name: "caramel", key: 3},
    {id: "Cookies and Cream", name: "cookieScream", key: 4},
    {id: "Peppermint", name: "peppermint", key: 5}
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
        product: null,
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
    changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    render() {
        return <React.Fragment>
            <PolicyInfo/>
            <Card title="sampleForm" collapse={false}>
                <Form
                    initialValues={this.state}
                    onSubmit={this.handleSubmit}
                    validationRules={{}}
                    toolbar={() => {
                        return <React.Fragment>
                            <Button title="save" isPrimary={true} type='submit'/>
                            <Button title="change language" isPrimary={true} onClick={() => this.changeLanguage('en')}/>
                            <Button title="cancel" isPrimary={false} type='rest'/>
                            <Button title="Notify" isPrimary={false} type='button' onClick={() => {
                                Notification.success('success', 'Title', 60000);
                            }}/>
                        </React.Fragment>
                    }}>
                    <Fieldset title='test'>
                        <Row>
                            <Field name="email" label="email">
                                <Input type="email"/>
                            </Field>
                            <Field id="password" name="password" label="password">
                                <Input type="password" placeholder="password"/>
                            </Field>
                            <Field name="birthDate" label="birthDate">
                                <DatePicker/>
                            </Field>
                        </Row>
                    </Fieldset>
                    <Row>
                        <Field name="product" label="product.name">
                            <Select data={SELECT_DATA}/>
                        </Field>

                        <Field name="Switch" label="state">
                            <Switch checked={this.state.switchCheckedPrimary} onChange={switchCheckedPrimary => {
                                this.setState({switchCheckedPrimary});
                            }}/>
                        </Field>
                        <Field id="__testCheckbox" name="testCheckbox">
                            <Checkbox label="save"/>
                        </Field>
                    </Row>
                    <Row>
                        <Field name="description" label="description">
                            <TextArea name="description"/>
                        </Field>
                    </Row>
                    <Row>
                        <Field name="favColor" label='favColor'>
                            <RadioGroup>
                                <Radio value='red' label='red'/>
                                <Radio value='blue' label='blue'/>
                                <Radio value='green' label='green'/>
                            </RadioGroup>
                        </Field>
                    </Row>
                </Form>
            </Card>
        </React.Fragment>
    }


}

const PolicyInfo=()=>{
    return  <Card title="policyInfo.title" collapse={true} isOpened={true}>
        <Row>
            <LabelAndValue label="policyInfo.insured.firstName" value='علی'/>
            <LabelAndValue label="policyInfo.insured.lastName" value='احمدی'/>
            <LabelAndValue label="policyInfo.insured.nationalCode" value='18612746259'/>
        </Row>

        <Row>
            <LabelAndValue label="policyInfo.insured.fatherName" value='محمدی'/>
            <LabelAndValue label="policyInfo.insured.age" value={32}/>
            <LabelAndValue label="policyInfo.insured.identityCardNo" value='14454'/>
        </Row>
        <Row>
            <LabelAndValue label="policyInfo.contract.contractNumber" value="1397/58/74/55"/>
            <LabelAndValue label="policyInfo.contract.policyholder" value='demisco'/>
            <LabelAndValue label="policyInfo.contract.startDate" value='1397/08/01' format="date"/>
        </Row>
        <Row>
            <LabelAndValue label="policyInfo.contract.endDate" value="1398/08/30"/>
        </Row>
    </Card>
};

export default FormUi;
