import { Component } from "react";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

import AuthService from "../services/auth.service";

type Props = {};

type State = {
  redirect: string | null,
  email: string,
  password: string,
  successful: boolean,
  message: string
};

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      redirect: null,
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  handleLogin(formValue: { email: string; password: string }) {
    const { email, password } = formValue;

    this.setState({
      message: ""
    });


    AuthService.login(email, password).then(
      () => {
        this.setState({
          redirect: "/register"
        });
      }
    );
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { message } = this.state;

    const initialValues = {
      email: "",
      password: ""
    };

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Formik
            initialValues={initialValues}
            onSubmit={this.handleLogin}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-control" />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  <span>Login</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}