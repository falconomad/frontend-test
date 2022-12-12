import { Dispatch } from "redux";
import {
  CREATE_APPLICATION,
  DELETE_APPLICATION,
  LIST_APPLICATIONS,
} from "../authentication/types";
import AppService from "./application.service";
import { CreatePayload } from "./types";

export const listApplications = () => async (dispatch: Dispatch) => {
  const data = await AppService.listApplications();

  dispatch({
    type: LIST_APPLICATIONS,
    payload: data,
  });
};

export const createApplication =
  (payload: CreatePayload) => (dispatch: Dispatch) => {
    AppService.addApplication(payload).then((res) => {
      dispatch({
        type: CREATE_APPLICATION,
        payload: payload,
      });
    });
  };

export const deleteApplication = (id: String) => (dispatch: Dispatch) => {
  AppService.removeApplication(id).then((res) => {
    dispatch({
      type: DELETE_APPLICATION,
      payload: id,
    });
  });
};
