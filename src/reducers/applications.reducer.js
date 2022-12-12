import {
  CREATE_APPLICATION,
  DELETE_APPLICATION,
  LIST_APPLICATIONS,
} from "../services/authentication/types";
const initialState = {
  list: {},
};

const convertToMap = (list) => {
  return list.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
};

export function app(state = initialState, action) {
  switch (action.type) {
    case LIST_APPLICATIONS:
      return {
        ...state,
        list: convertToMap(action.payload),
      };
    case CREATE_APPLICATION:
      return {
        ...state,
        list: { ...state.list, [action.payload.id]: { ...action.payload } },
      };
    case DELETE_APPLICATION:
      const next = { ...state.list };
      delete next[action.payload];
      return {
        list: { ...next },
      };
    default:
      return state;
  }
}
