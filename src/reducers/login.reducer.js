import { userConstants } from "../services/authentication/types";

const session = JSON.parse(localStorage.getItem("sessionId"));
const initialState = session ? { loggedIn: true } : { loggedIn: false };

export function userSession(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return { ...state };
    case userConstants.LOGOUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
