import React, { useEffect } from "react";
import { createApplication, listApplications } from "../services/application/actions";
import Header from "../components/Header/Header";
import Applications from "../components/Applications/Applications";
import ViewApplication from "./ViewApplication";
import { Route, Routes } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import AddApplication from "../components/AddApplication";


const HomeBody = () => {
  return (
    <div className="home-body">
      <span>Welcome!</span>
      <ul>
        <li>You can click on the breadcrumb to navigate</li>
        <li>Clickin on applications will load applications list</li>
        <li>Clicking on an app opens up a new breadcrum tab</li>
        <li>
          Creation and deletion of applications is not implemented because
          since it is not part of the requirements
        </li>
        <li>
          Check requirements here :{" "}
          <a href="https://github.com/ventureleap/frontend-test">
            https://github.com/ventureleap/frontend-test
          </a>
        </li>
      </ul>
    </div>
  );
};

const Home = () => {
  const dispatch = useAppDispatch();
  const { loggedIn } = useAppSelector(state => state.reducer.userSession)

  const handleAdd = (formData: any) => {
    dispatch(createApplication(formData))
  }

  useEffect(() => {
    if (loggedIn) {
      dispatch(listApplications());
    }
  }, [loggedIn, dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={HomeBody()} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/add" element={<AddApplication onSubmit={handleAdd} />} />
        <Route path="/applications/:id" element={<ViewApplication />} />
      </Routes>
    </>
  );
};

export default Home;
