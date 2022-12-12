import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../services/authentication/actions";
import Breadcrumb from "../BreadCrumb/BreadCrumb";
import "./header.scss";

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="header">
      <Breadcrumb />
      <div>
        <button onClick={handleLogout} className='logout-button'>logout</button>
      </div>
    </div>
  );
}

export default Header;
