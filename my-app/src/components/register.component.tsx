import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import AuthService from "../services/auth.service";

type Props = {};

type State = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  university: string,
  successful: boolean,
  message: string
};

export default class Register extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      university: "",
      successful: false,
      message: ""
    };
  }

  handleRegister(formValue: { email: string; password: string, firstName: string, lastName: string, university: string }) {
    const { email, password, firstName, lastName, university } = formValue;

    this.setState({
      message: "",
      successful: false
    });

    AuthService.register(
      email,
      password,
      firstName,
      lastName,
      university
    ).then(
      response => {
        this.setState({
          message: response.data.ok,
          successful: true
        });
      }
    );
  }

  render() {
    const { successful, message } = this.state;

    const initialValues = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      university: ""
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
            onSubmit={this.handleRegister}
          >
            <Form>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="firstName"> First Name </label>
                    <Field
                      name="firstName"
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName"> Last Name </label>
                    <Field
                      name="lastName"
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="university"> University </label>
                    <Field
                      name="university"
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                  </div>
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
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