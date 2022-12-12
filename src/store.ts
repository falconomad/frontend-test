import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { reducer as reduxFormReducer } from "redux-form";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer,
  form: reduxFormReducer,
});
const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware, loggerMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
