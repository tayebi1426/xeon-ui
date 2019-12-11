import React, {useState} from "react";
import {Button, Card, Col, Field, Form, I18Massage, Icon, Input, Link, Row, Security} from "../../core";

const LoginPage = ({history}) => {
    const onLoginSuccess = (token) => {
        history.push('/home');
    };
    return <div className="container-fluid">
        <Row className='h-100'>
            <Col className="login-form" lg={4}>
                <Card>
                    <Row>
                        <Col sm={12} className='login-icon'>
                            <Icon code='shield-check'  size="6x"/>
                        </Col>
                    </Row>
                    <LoginForm onLoginSuccess={onLoginSuccess}/>
                </Card>
            </Col>
        </Row>
    </div>
};
const LOGIN_FORM_RULES = {
    username: 'required',
    password: 'required'
};

const LoginForm = ({onLoginSuccess}) => {
    const [invalidLogin, setInvalidLogin] = useState(false);
    const onLogin = (values) => {
        setInvalidLogin(false);
        Security.loginUser(values.username, values.password)
            .then((token) => {
                onLoginSuccess(token);
            }).catch((err) => {
            console.debug('invalid login error : ', err);
            setInvalidLogin(true);
        });
    };
    return <React.Fragment>
        <Row>
            <Col className='invalidLoginMessage'>
                {invalidLogin &&
                <I18Massage code='err.invalid-username-or-password'/>}
            </Col>
        </Row>
        <Form initialValues={{username: '', password: ''}}
              validationRules={LOGIN_FORM_RULES}
              onSubmit={onLogin}>
            <Row>
                <Field className='col-10 offset-1' name="username" label="loginPage.username">
                    <Input/>
                </Field>
                <Field className='col-10 offset-1' name="password" label="loginPage.password">
                    <Input type='password'/>
                </Field>
            </Row>
            <Row className='mt-4 mb-4 offset-1'>
                <Col md={3} sm={11}>
                    <Button type='submit'
                            isPrimary={true}
                            title='loginPage.login'
                            className='w-100'/>
                </Col>
                <Col md={2} sm={4} className="registerUser">
                    <Link to='/register' title='loginPage.register'/>
                </Col>
                <Col md={5} sm={4} className="forgotPassword">
                    <Link to='/forgotPassword' title='loginPage.forgotPassword'/>
                </Col>
            </Row>
        </Form>
    </React.Fragment>
};
export default LoginPage;
