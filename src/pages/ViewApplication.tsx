import React from "react";
import { useParams } from "react-router-dom";
import "./viewApplications.scss";
import { useAppSelector } from "../hooks/hooks";


const ViewApplication = () => {
  const { id } = useParams();
  const { list } = useAppSelector((state) => state.reducer.app)

  return (
    <div className="details-container">
      <div className="details-title">
        <h1>Application Details</h1>
      </div>{" "}
      <div className="details-card">
        {id && list[id] ? (
          <div>
            {Object.keys(list[id]).map((key: any) => {
              return (
                <div className="card-item">
                  <span>{`${key.toUpperCase()} : `}</span>
                  <span>{list[id][key]}</span>
                </div>
              );
            })}
          </div>
        ) : (
          "No data"
        )}
      </div>
    </div>
  );
};

export default ViewApplication;
