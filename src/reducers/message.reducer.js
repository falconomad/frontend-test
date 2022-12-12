import { userConstants } from "../services/authentication/types";
const initialState = {
  message: null,
  error: false,
};

export function message(state = initialState, action) {
  switch (action.type) {
    case userConstants.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
