import { Component } from "react";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

import AuthService from "../services/auth.service";
import { query } from "express";

type Props = {};

type State = {
  redirect: string | null,
  phoneNumber: string,
  roomID: string,
  successful: boolean,
  message: string
};

export default class PhoneNumber extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.sendTextMessage = this.sendTextMessage.bind(this);

    this.state = {
      redirect: null,
      phoneNumber: "",
      roomID: "",
      successful: false,
      message: ""
    };
  }

  sendTextMessage(formValue: { phoneNumber: string }) {
    const { phoneNumber } = formValue;

    this.setState({
      message: ""
    });

    const queryString = window.location.search;
    // console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const room = urlParams.get('roomID') as string;
    // console.log(room);

    AuthService.sendTextMessage(phoneNumber, room).then(
      () => {
        this.setState({
          redirect: "/success"
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
      phoneNumber: ""
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
            onSubmit={this.sendTextMessage}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="phoneNumber">Enter Phone Number</label>
                <Field name="phoneNumber" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  <span>Send Text</span>
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