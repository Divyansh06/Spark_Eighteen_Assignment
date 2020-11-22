import { UPDATE_DATA } from "./Actions/actionTypes";
import JSONDATA from "./JsonData.json";

const initialstate = {
  data: JSONDATA,
};

export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return (state = {
        ...state,
        data: action.payload,
      });
    default:
      return state;
  }
}
