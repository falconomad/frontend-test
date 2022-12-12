import { combineReducers } from "redux";
import { signup } from "./signup.reducer";
import { userSession } from "./login.reducer";
import { app } from "./applications.reducer";
import { message } from "./message.reducer";

const rootReducer = combineReducers({
  signup,
  userSession,
  app,
  message,
});

export default rootReducer;
