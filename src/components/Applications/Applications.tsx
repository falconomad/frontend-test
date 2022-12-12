import React from "react";
import { connect } from "react-redux";
import "./applications.scss";

import AppCard from "../AppCard/AppCard";
import { useAppSelector } from "../../hooks/hooks";
import { Link, useNavigate } from "react-router-dom";


const Applications = () => {
  //add and remove application is not implemented.
  //This feature is not mentioned in the requirements
  const { list } = useAppSelector((state) => state.reducer.app)

  return (
    <div className="list-container">
      <Link to={'/home/applications/add'} className="plus-button" />
      {list ?
        Object.values(list).map((item: any) => {
          return <AppCard key={item.id} item={item}></AppCard>;
        }) : null}
    </div>
  );
};

export default Applications;
