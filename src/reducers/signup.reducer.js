import { userConstants } from "../services/authentication/types";
const initialState = { registering: false, success: false, error: null };

export function signup(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { ...initialState, registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...initialState,
        success: true,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
}
