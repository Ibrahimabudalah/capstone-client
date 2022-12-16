import axios from "axios";

const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken || "";

const instance = axios.create({
  baseURL: "https://ubiquitous-bavarois-14c6b2.netlify.app/",
  headers: {
    token: `Bearer ${accessToken}`,
  },
});

export default instance;
