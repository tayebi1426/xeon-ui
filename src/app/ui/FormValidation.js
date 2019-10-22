import React from "react";
import {Field, Form, Input} from "../../core";
import Card from "../../core/components/CustomBootstrap/Card";

class FormValidation extends React.Component {


    formValidate = values => {
        let errors = {};
        if (values.email) {
            if (values.email.search('@') === -1)
                errors.email = 'invalid email address';
        } else {
            errors.email = 'Required';
        }
        return errors;
    };

    handleSubmit = (values, actions) => {
        console.debug('actions : ', actions);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    };

    render() {
        return (
            <Card>
                <Form
                    initialValues={{email: ''}}
                    validate={this.formValidate}
                    onSubmit={this.handleSubmit}>

                    <Field id="exampleEmail" name="email" label="email" placeholder="email">
                        <Input type="text"/>
                    </Field>
                    <button type='submit'>submit</button>

                </Form>
            </Card>
        );
    }
}

export default FormValidation;