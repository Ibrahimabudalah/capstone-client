import axios from "axios";

const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken || "";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    token: `Bearer ${accessToken}`,
  },
});

export default instance;
