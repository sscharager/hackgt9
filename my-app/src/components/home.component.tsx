import { Component } from "react";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import AuthService from "../services/auth.service";

type Props = {};

type State = {
  redirect: string | null,
  university: string,
  successful: boolean,
  message: string
};

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleUniversity = this.handleUniversity.bind(this);
    this.state = {
      redirect: null,
      university: "",
      successful: false,
      message: ""
    };
  }


  handleUniversity(formValue: { university: string }) {
    const { university } = formValue;

    this.setState({
      message: ""
    });


    AuthService.getAvailableRooms(university).then(
      () => {
        this.setState({
          redirect: "/showAvailablility"
        });
      }
    );
  }

  render() {
    const { message } = this.state;

    const initialValues = {
        university: "",
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
            initialValues = {initialValues}
            onSubmit={this.handleUniversity}
          >
            <Form>
              {/* <h2>Are you a student? Please select your university.</h2> */}
              <div className="form-group">
                <label htmlFor="university">University</label>
                <Field name="university" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  <span>Submit</span>
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
            <h2>Are you a staff? Log in or register below.</h2>

            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
                <span>Login</span>
            </button>
            </div>

            <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
                <span>Register</span>
            </button>
            </div>
        </div>
      </div>
    );
  }
}