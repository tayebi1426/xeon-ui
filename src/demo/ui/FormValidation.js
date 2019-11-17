import React from "react";
import {Card, Field, Form, Input,Button} from "../../core";

let SAMPLE_FORM_RULES = {
    username: 'required|min:4',
    email: 'required|email|max:10'
};

class FormValidation extends React.Component {

    onValidate=(validator)=>{

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
                    initialValues={{username: '', email: ''}}
                    validationRules={SAMPLE_FORM_RULES}
                    onValidate={this.onValidate}
                    onSubmit={this.handleSubmit}>

                    <Field name="username" label="username">
                        <Input type="text"/>
                    </Field>
                    <Field id="exampleEmail" name="email" label="email" placeholder="email">
                        <Input type="text"/>
                    </Field>
                    <Button isPrimary={true}  type='submit' title='submit'/>

                </Form>
            </Card>
        );
    }
}

export default FormValidation;