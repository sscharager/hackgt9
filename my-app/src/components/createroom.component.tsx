import { Component } from "react";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

import AuthService from "../services/auth.service";

type Props = {};

type State = {
  redirect: string | null,
  buildingName: string,
  roomNumber: string,
  seatsTotal: number,
  university: string,
  successful: boolean,
  message: string
};

export default class CreateRoom extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleCreateRoom = this.handleCreateRoom.bind(this);

    this.state = {
      redirect: null,
      buildingName: "",
      roomNumber: "",
      seatsTotal: 0,
      university: "",
      successful: false,
      message: ""
    };
  }

  handleCreateRoom(formValue: { buildingName: string, roomNumber: string, seatsTotal: number, university: string }) {
    const { buildingName, roomNumber, seatsTotal, university } = formValue;

    this.setState({
      message: ""
    });


    AuthService.createRoom(buildingName, roomNumber, seatsTotal, university).then(
      () => {
        this.setState({
          redirect: "/table"
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
        buildingName: "",
        roomNumber: "",
        seatsTotal: 0,
        university: ""
    };

    return (
      <div className="col-md-12">
        <div className="card card-container">
        <h1> Create a New Room</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={this.handleCreateRoom}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="buildingName">Building Name</label>
                <Field name="buildingName" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="roomNumber">Room Number</label>
                <Field name="roomNumber" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="seatsTotal">Total Seats</label>
                <Field name="seatsTotal" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="university">University</label>
                <Field name="university" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  <span>Add Room</span>
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
