import React from 'react';
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
  }

  return (
    <Layout>
      <section className="login">
        <h1>Welcome back!</h1>
        <Form onSubmit={authenticate} className="login-form">
          <div className="form-group">
            <strong>username </strong>
            <Form.Input required type="text" id="username" />
          </div>
          <div className="form-group">
            <strong>password </strong>
            <Form.Input required type="password" id="password" />
          </div>
          <Button type="submit" primary>
            Login
          </Button>
        </Form>
      </section>
    </Layout>
  );
}

export default LoginPage;
