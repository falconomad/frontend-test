import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";


export const PrivateRoute = (props: any) => {
  const { component: Component, ...rest } = props;

  const sessionId = localStorage.getItem("sessionId") ? JSON.parse(localStorage.getItem("sessionId") || "") : null;

  return (
    <>
      <Routes>
        <Route
          {...rest}
          element={<>{sessionId ? <Home /> : <Navigate to="/" />}</>}
        />
      </Routes>
    </>
  );
};
