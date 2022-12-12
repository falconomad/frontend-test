import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteApplication } from "../../services/application/actions";
import { Application } from "../../utils/types";
import "./appcard.scss";
type Props = {
  item: Application,
};
function AppCard({ item }: Props) {

  const dispatch = useAppDispatch()
  const handleRemove = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault()
    dispatch(deleteApplication(id))
  }
  return (
    <Link to={`/home/applications/${item.id}`} className="card-container">
      {item.name}
      <span className="gg-remove " onClick={(e) => handleRemove(e, item.id)}>
      </span>
    </Link>
  );
}

export default AppCard;
