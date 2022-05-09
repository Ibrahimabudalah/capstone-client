import axios from "axios";

const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken || "";

const instance = axios.create({
  baseURL: "https://capstone-serveer.herokuapp.com",
  headers: {
    token: `Bearer ${accessToken}`,
  },
});

export default instance;
