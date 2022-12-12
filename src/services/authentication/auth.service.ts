import axios from "axios";
import { LoginPayload } from "./types";
import Cookies from "js-cookie";

const API_URL = "http://localhost:3000/api";

const register = (payload: LoginPayload) => {
  return axios.post(API_URL + "/users", {
    username: payload.username,
    password: payload.password,
  });
};

const login = async (payload: LoginPayload) => {
  return await axios({
    method: "post",
    url: API_URL + "/users/login",
    // withCredentials: true,
    data: {
      username: payload.username,
      password: payload.password,
    },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.data.session) {
      localStorage.setItem("sessionId", JSON.stringify(response.data.session));
    }

    return response.data;
  });
};

const logout = () => {
  Cookies.remove("sessionId");
  localStorage.removeItem("sessionId");
};

export default {
  register,
  login,
  logout,
};
