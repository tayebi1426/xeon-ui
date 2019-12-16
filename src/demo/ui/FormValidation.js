import React from "react";
import {Button, Card, Field, Form, Input} from "../../core";

let SAMPLE_FORM_RULES = {
    username: 'required|min:4',
    email: 'required|email|max:10'
};

class FormValidation extends React.Component {

    onValidate = (validator) => {

    };
    handleSubmit = (values, actions) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    };

    render() {
        return (
            <Card title="form validation">
                <Form
                    initialValues={{username: '', email: '', date: new Date()}}
                    validationRules={SAMPLE_FORM_RULES}
                    onValidate={this.onValidate}
                    onSubmit={this.handleSubmit}
                    toolbar={() => {
                        return <Button isPrimary={true} type='submit' title='submit'/>
                    }}>

                    <Field name="username" label="username">
                        <Input type="text"/>
                    </Field>
                    <Field name="email" label="email" placeholder="email" type='email'/>
                    <Field name="date" label="date" placeholder="date" type='date'/>
                </Form>
            </Card>
        );
    }
}

export default FormValidation;