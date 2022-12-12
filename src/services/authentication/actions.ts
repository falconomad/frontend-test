import { userConstants } from "./types";

import AuthService from "./auth.service";
import { Dispatch } from "redux";

export const register =
  (username: String, password: String) => (dispatch: Dispatch) => {
    return AuthService.register({ username, password }).then(
      (response) => {
        dispatch({
          type: userConstants.REGISTER_SUCCESS,
        });

        dispatch({
          type: userConstants.SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: userConstants.REGISTER_FAILURE,
        });

        dispatch({
          type: userConstants.SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const login =
  (username: String, password: String) => (dispatch: Dispatch) => {
    return AuthService.login({ username, password }).then(
      (data) => {
        dispatch({
          type: userConstants.LOGIN_SUCCESS,
          payload: { user: data },
        });

        dispatch({
          type: userConstants.SET_MESSAGE,
          payload: { message: "Successfully logged in", error: false },
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: userConstants.LOGIN_FAILURE,
        });

        dispatch({
          type: userConstants.SET_MESSAGE,
          payload: { message: message, error: true },
        });

        return Promise.reject();
      }
    );
  };

export const logout = () => (dispatch: Dispatch) => {
  AuthService.logout();

  dispatch({
    type: userConstants.LOGOUT,
  });
};
