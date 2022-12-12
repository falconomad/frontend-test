import api from "../api";
import { CreatePayload, UpdatePayload } from "./types";

const listApplications = async () => {
  return api
    .get("/applications")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const addApplication = async (payload: CreatePayload) => {
  return api
    .post("/applications", payload)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const removeApplication = async (id: String) => {
  return api
    .delete(`/applications/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const updateApplication = async (payload: UpdatePayload) => {
  api
    .put(`/applications/${payload.id}`, { username: payload.username })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export default {
  listApplications,
  addApplication,
  removeApplication,
  updateApplication,
};
