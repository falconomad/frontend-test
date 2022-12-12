import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.scss";

function Breadcrumb() {
  const location = useLocation();
  return (
    <nav>
      <Link
        to="/home"
        className={
          location.pathname.endsWith("/home")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        to="/home/applications"
        className={
          location.pathname.endsWith("/applications")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Applications
      </Link>
      {location.pathname.includes("/applications/") ? (
        <>
          <span className="breadcrumb-arrow">&gt;</span>{" "}
          <Link to="/home/applications/1" className={"breadcrumb-active"}>
            {location.pathname.split("applications/")[1]}
          </Link>
        </>
      ) : null}
    </nav>
  );
}

export default Breadcrumb;
