import { Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { PrivateRoute } from "./components/PrivateRoute";
import SignupForm from "./components/SignupForm";
import { login, register } from "./services/authentication/actions";
import { useEffect } from "react";
import Home from "./pages/Home";
import Snackbar from "./components/Snackbar/Snackbar";
import { userConstants } from "./services/authentication/types";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import React from "react";


function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useAppSelector((state) => state.reducer.userSession)
  const { success } = useAppSelector((state) => state.reducer.signup)
  const { message } = useAppSelector((state) => state.reducer.message)

  const handleSignup = (formData: any) => {
    dispatch(register(formData.username, formData.password));
  };

  useEffect(() => {
    setTimeout(() => {
      if (message) {
        dispatch({
          type: userConstants.SET_MESSAGE,
          payload: null,
        });
      }
    }, 3000);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    if (loggedIn) {
      navigate("/home");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if (success) {
      navigate("/");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  const handleLogin = (formData: any) => {
    dispatch(login(formData.username, formData.password));
  };
  return (
    <>
      <Routes>
        <Route index element={<LoginForm onSubmit={handleLogin} />} />
        <Route
          path="/signup"
          element={<SignupForm onSubmit={handleSignup} />}
        />
      </Routes>
      <PrivateRoute path="/home/*" component={<Home />} />
      <Snackbar />
    </>
  );
}

export default App;
