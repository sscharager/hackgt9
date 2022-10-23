import axios from "axios";

const API_URL = "http://qrstudy.herokuapp.com/api/";

class AuthService {
  login(email: string, password: string) {
    return axios.post(API_URL + "staff/login", {
        email,
        password
      })
      .then(response => {
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email: string, password: string, firstName: string, lastName: string, university: string) {
    return axios.post(API_URL + "staff/register", {
      email,
      password,
      firstName,
      lastName,
      university
    });
  }

  createRoom(buildingName: string, roomNumber: string, seatsTotal: number, university: string) {
    return axios.post(API_URL + "staff/createRoom", {
        buildingName,
        roomNumber,
        seatsTotal,
        university
      })
      .then(response => {
        return response.data;
      });
  }

  getAvailableRooms(university: string) {
    return axios.post(API_URL + "staff/getAvailableRooms", {
        university
      })
      .then(response => {
        return response.data;
      });
  }
}

export default new AuthService();