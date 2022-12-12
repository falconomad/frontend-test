import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import "./snackbar.scss";


const Snackbar = () => {

  const { message } = useAppSelector((state) => state.reducer.message)
  return (
    <div className={message?.error ? "snackbar-width-auto" : "snackbar-width-min"}>
      {message?.message}
    </div>
  );
};

export default Snackbar;
